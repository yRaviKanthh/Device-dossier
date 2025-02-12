🏡 Device Dossier: Authenticity, Protection & Store Locator for Devices
This is a Device Dossier web application designed to verify device authenticity, check warranty status, identify lost or stolen devices, and locate authorized service centers. The application uses anti-tamper QR codes and a microservices architecture for scalability and robustness.
📌 Features
✅ Verify device authenticity using a QR code
✅ Check warranty status and report stolen devices
✅ Locate authorized service centers with an interactive map
✅ User-friendly web interface built with Node.js and Express
✅ Secure and scalable microservices architecture
📂 Project Structure
device_dossier/
│── models/
│   ├── Laptop.js               # Model for laptop-related data
│   ├── user.js                 # Model for user-related data
│── node_modules/               # Installed npm packages
│── public/
│   ├── LaptopStoreMap/
│   │   └── index.html          # Frontend page for laptop store map
│   ├── register-laptop.html    # Registration form for laptops
│   ├── view-laptop.html        # View details of registered laptops
│   ├── style.css               # Stylesheet for the application
│── views/
│   ├── dashboard.ejs           # Dashboard view for the application
│   ├── index.ejs               # Homepage view
│   ├── laptop-registered.ejs   # View for displaying registered laptops
│   ├── login-signup.ejs        # Login and signup view
│   ├── qr-display.ejs          # QR code display view
│   ├── register-laptop.ejs     # Laptop registration view
│   ├── report-stolen.ejs       # Report stolen laptop view
│   ├── second-hand-laptop.ejs  # Second-hand laptop-related view
│   ├── stolen-laptop.ejs       # Stolen laptop details view
│   ├── update-password.ejs     # Password update view
│── app.js                      # Main Express.js app setup
│── package-lock.json           # npm lockfile
│── package.json                # Dependencies and project metadata🎯 Technologies Used
Backend: Node.js, Express.jsFrontend: HTML, CSS, EJSDatabase: MongoDBDeployment: Render
🔧 Installation & Setup
🔹 Clone the Repository
git clone https://github.com/your-username/device_dossier.git
cd device_dossier🔹 Install Dependencies
npm install🔹 Run the Application
node app.js🔗 Open in your browser:http://127.0.0.1:3000/
🚀 Live Websitehttps://device-dossier.onrender.com/
🚀 Deploying on Render1️⃣ Push Code to GitHub
git add .
git commit -m "Initial commit"
git push origin main2️⃣ Deploy on Render:
Go to Render
Click New Web Service
Connect to your GitHub repository
Set Start Command: node app.js
Click Deploy 🎉
📸 Screenshots
🔹 Web InterfaceWeb App Screenshot
🔹 QR Code VerificationQR Code Screenshot
🏆 Future Enhancements
✅ Implement AI-based anomaly detection for fraud prevention✅ Add a blockchain-based verification system✅ Integrate additional device tracking features
📜 License
This project is open-source under the MIT License.
💡 Need Help?
Feel free to open an issue or contribute to improving this project! 😊
⭐ If you like this project, give it a star on GitHub! ⭐
