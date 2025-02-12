# 📱 Device Dossier: Authenticity, Protection & Store Locator for Devices

This is a *Device Authentication and Store Locator* web application built using *Node.js* and *MongoDB*. The application verifies device authenticity, checks warranty status, tracks stolen devices, and locates authorized service centers using anti-tamper QR codes.

---

## 📌 Features

✅ Verify device authenticity using serial numbers  
✅ Generate and scan anti-tamper QR codes  
✅ Locate nearby authorized service centers  
✅ Report and track stolen devices  
✅ Interactive web interface using EJS and Leaflet.js  

---

## 📂 Project Structure

```
project/
├── models/
│   ├── Laptop.js               # Model for laptop-related data
│   └── user.js                 # Model for user-related data
├── node_modules/               # Installed npm packages
├── public/
│   ├── LaptopStoreMap/
│   │   └── index.html          # Frontend page for laptop store map
│   ├── register-laptop.html    # Registration form for laptops
│   ├── view-laptop.html        # View details of registered laptops
│   ├── style.css               # Stylesheet for the application
├── views/
│   ├── dashboard.ejs           # Dashboard view for the application
│   ├── index.ejs               # Homepage view
│   ├── laptop-registered.ejs   # View for displaying registered laptops
│   ├── login-signup.ejs        # Login and signup view
│   ├── qr-display.ejs          # QR code display view
│   ├── register-laptop.ejs     # Laptop registration view (server-side)
│   ├── report-stolen.ejs       # Report stolen laptop view
│   ├── second-hand-laptop.ejs  # Second-hand laptop-related view
│   ├── stolen-laptop.ejs       # Stolen laptop details view
│   └── update-password.ejs     # Password update view
├── app.js                      # Main Express.js app setup
├── package-lock.json           # npm lockfile
├── package.json                # Dependencies and project metadata
├── README.md                   # Project info
├── .gitignore                  # Ignore unnecessary files
```

---

## 🎯 Technologies Used

- *Backend:* Node.js, Express.js  
- *Frontend:* EJS, HTML, CSS, JavaScript  
- *Database:* MongoDB  
- *APIs:* Leaflet.js (for map integration), QR Code API  
- *Tools:* Git, Postman, npm  

---

## 🔧 Installation & Setup

### 🔹 Clone the Repository
```bash
git clone https://github.com/your-username/device-dossier.git
cd device-dossier
```

### 🔹 Install Dependencies
```bash
npm install
```

### 🔹 Run the Application
```bash
node app.js
```

🔗 Open in your browser: *http://127.0.0.1:3000/*

---

## 🚀 Deploying on Render

### 1️⃣ *Push Code to GitHub*
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2️⃣ *Deploy on Render:*
- Go to [Render](https://render.com/)  
- Click *New Web Service*  
- Connect to your GitHub repository  
- Set *Start Command:* `node app.js`  
- Click *Deploy* 🎉  

---

## 📸 Screenshots

### 🔹 *Web Interface*
![Web App Screenshot](https://raw.githubusercontent.com/yRaviKanthh/Device-dossier/7420f9ae0d9dff481a2efd82363b814f8c693f1f/screenshots/Singup.png)

(https://raw.githubusercontent.com/yRaviKanthh/Device-dossier/blob/1b3ac7865c03fb517212cab7e4e590c247a5335d/screenshots/laptopregistration.png)


### 🔹 *QR Code Verification*
![QR Code Verification](https://your-screenshot-link.com/qr-code-verification.png)

---

## 🏆 Future Enhancements  

✅ Implement AI-based device fraud detection  
✅ Add multi-language support  
✅ Enhance UI with interactive charts and graphs  
✅ Integrate cloud storage for device data  

---

## 📜 License  

This project is *open-source* under the [MIT License](LICENSE).  

---

### 💡 *Need Help?*  
Feel free to *open an issue* or *contribute* to improve this project! 😊  
⭐ If you like this project, give it a *star* on GitHub! ⭐

