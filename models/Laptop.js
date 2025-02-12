const mongoose = require('mongoose');

// Laptop schema with 'stolen' and 'stolenMessage' fields
const laptopSchema = new mongoose.Schema({
  serialNumber: { type: String, required: true, unique: true }, // Unique serial number for each laptop
  model: { type: String, required: true },                     // Laptop model
  brand: { type: String, required: true },                     // Laptop brand
  warranty: { type: Number, required: true },                  // Warranty period (in months)
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user who owns the laptop
  stolen: { type: Boolean, default: false },                   // Indicates if the laptop is reported stolen
  stolenMessage: { type: String, default: '' },                // Message about the laptop being stolen
  comments: { type: String, default: '' },                     // Additional details about the laptop (e.g., color, display size)
});

// Creating the Laptop model
const Laptop = mongoose.model('Laptop', laptopSchema);

module.exports = Laptop;
