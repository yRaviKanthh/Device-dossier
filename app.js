const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const qr = require('qrcode');

// Initialize app
const app = express();
// MongoDB setup
mongoose
  .connect('mongodb://localhost:27017/laptopRegistration', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));

// User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
});

const User = mongoose.model('User', userSchema);

// Laptop schema with 'comments' field added
const laptopSchema = new mongoose.Schema({
  serialNumber: String,
  model: String,
  brand: String,
  warranty: Number,
  operatingSystem: String,
  memory: String,
  storage: String,
  stolenMessage: { type: String, default: null },
  comments: { type: String, default: '' }, // Additional comments (e.g., color, display size)
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Laptop = mongoose.model('Laptop', laptopSchema);

// Middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  })
);

// Routes

// Home Route
app.get('/', (req, res) => {
  res.render('index');
});

// Login/Signup Route
app.get('/login-signup', (req, res) => {
  const { signup } = req.query;
  const formTitle = signup === 'true' ? 'Sign Up' : 'Login';
  res.render('login-signup', { formTitle, signup: signup === 'true', signupMessage: null });
});

// Handle Signup
app.post('/signup', async (req, res) => {
  const { name, email, password, phone } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.render('login-signup', {
      formTitle: 'Sign Up',
      signup: true,
      signupMessage: 'Email already in use. Please log in.',
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword, phone });
  await newUser.save();

  res.render('login-signup', {
    formTitle: 'Login',
    signup: false,
    signupMessage: 'Sign up successful! Please log in.',
  });
});

// Handle Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.render('login-signup', {
      formTitle: 'Login',
      signup: false,
      signupMessage: 'No user found with this email.',
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.render('login-signup', {
      formTitle: 'Login',
      signup: false,
      signupMessage: 'Incorrect password.',
    });
  }

  req.session.user = user;
  res.redirect('/register-laptop');
});

// Register Laptop Route
app.get('/register-laptop', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login-signup');
  }
  res.render('register-laptop', { message: null });
});

// Handle Laptop Registration
app.post('/register-laptop', async (req, res) => {
  const { serialNumber, model, brand, warranty, operatingSystem, memory, storage, comments } = req.body;
  const userId = req.session.user._id;

  const existingLaptop = await Laptop.findOne({ serialNumber });
  if (existingLaptop) {
    if (existingLaptop.stolenMessage) {
      const originalUser = await User.findById(existingLaptop.userId);
      const qrData = { user: originalUser, laptop: existingLaptop, comments: existingLaptop.comments };
      const qrCode = await qr.toDataURL(JSON.stringify(qrData));

      return res.render('stolen-laptop', {
        stolenMessage: existingLaptop.stolenMessage,
        userDetails: originalUser,
        laptopDetails: existingLaptop,
        qrCode,
      });
    }

    const originalUser = await User.findById(existingLaptop.userId);
    const qrData = { user: originalUser, laptop: existingLaptop, comments: existingLaptop.comments };
    const qrCode = await qr.toDataURL(JSON.stringify(qrData));

    return res.render('second-hand-laptop', {
      userDetails: originalUser,
      laptopDetails: existingLaptop,
      qrCode,
    });
  }

  const newLaptop = new Laptop({
    serialNumber,
    model,
    brand,
    warranty,
    operatingSystem,
    memory,
    storage,
    comments,  // Save the comments here
    userId,
  });

  try {
    await newLaptop.save();
    const qrData = {
      user: req.session.user,
      laptop: { serialNumber, model, brand, warranty, operatingSystem, memory, storage },
      comments,  // Include comments in the QR data
    };
    const qrCode = await qr.toDataURL(JSON.stringify(qrData));

    res.render('qr-display', {
      qrCode,
      userDetails: req.session.user,
      laptopDetails: { serialNumber, model, brand, warranty, operatingSystem, memory, storage },
      comments,  // Display comments on the QR page
    });
  } catch (err) {
    res.status(500).send('Error registering laptop.');
  }
});

// Report Stolen Laptop Route
app.get('/report-stolen', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login-signup');
  }
  res.render('report-stolen', { message: null });
});

// Handle Stolen Laptop Reporting
app.post('/report-stolen', async (req, res) => {
  const { serialNumber, stolenMessage } = req.body;

  const laptop = await Laptop.findOne({ serialNumber });
  if (!laptop) {
    return res.render('report-stolen', {
      message: { type: 'error', text: 'Laptop not found.' },
    });
  }

  laptop.stolenMessage = stolenMessage;
  await laptop.save();

  res.render('report-stolen', {
    message: { type: 'success', text: 'Laptop marked as stolen.' },
  });
});

// Dashboard
app.get('/dashboard', async (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login-signup');
  }

  const laptops = await Laptop.find({ userId: req.session.user._id });
  res.render('dashboard', { user: req.session.user, laptops });
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login-signup');
  });
});

// Serve static store map
app.use('/LaptopStoreMap', express.static('LaptopStoreMap'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
