# Device Dossier: Authenticity, Protection & Store Locator for Devices

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Installation](#installation)
6. [Usage](#usage)
7. [API Endpoints](#api-endpoints)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)

---

## Project Overview
The **Device Dossier** is a robust, scalable application designed to verify device authenticity, check warranty status, identify lost or stolen devices, and locate authorized service centers using anti-tamper QR codes. This project is part of the **48th series of the Karnataka State Council for Science and Technology (KSCST) Student Project Programme (2024-2025)**.

### Objectives:
- Verify device authenticity.
- Check warranty status.
- Identify lost or stolen devices.
- Locate authorized service centers using anti-tamper QR codes.

---

## Features
- **User Registration**: Users can register their devices and personal details.
- **Serial Number Verification**: Check the authenticity of a device using its serial number.
- **QR Code Generation**: Generate and scan QR codes for device details.
- **Store Locator**: Find the nearest authorized service centers.
- **Lost/Stolen Device Reporting**: Report a lost or stolen device and track its status.

---

## Technology Stack
- **Backend**: Node.js, Express.js
- **Frontend**: EJS, HTML, CSS, JavaScript
- **Database**: MongoDB
- **APIs**: Leaflet.js (for map integration), QR Code API
- **Tools**: Git, Postman, npm

---

## Project Structure
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
```

---

## Installation
### Prerequisites:
- Node.js installed
- MongoDB database setup

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Device-Dossier.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Device-Dossier
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   node app.js
   ```

---

## Usage
- **Register a device** through the website.
- **Verify authenticity** using a serial number.
- **Scan QR code** for device details.
- **Locate service centers** on the map.
- **Report stolen devices** and track them.

---

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/store-locations` | Fetch store locations |
| POST | `/register-laptop` | Register a new laptop |
| GET | `/verify-serial/:serialNumber` | Verify a laptop by serial number |
| POST | `/report-stolen` | Report a stolen laptop |

---

## Contributing
We welcome contributions! Follow these steps:
1. Fork the repository.
2. Create a feature branch.
3. Commit changes and push.
4. Create a pull request.

---

## License
This project is licensed under the MIT License.

---

## Contact
- **Project Guide**: M. Giridhar Rao
- **Contributors**: Yedimala Ravikanth, Yama Hyndavi, Yashwanth K P, Shekar J
- **Institution**: Sambhram Institute of Technology
- **Email**: your-email@example.com

