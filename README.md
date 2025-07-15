# React Auth Upflairs

A modern, responsive React authentication app built with React.js. This project provides user login, signup, and protected routes using React Router.

---

## 🚀 Features

- User Signup and Login functionality  
- Protected routes for authenticated users  
- Client-side routing with React Router  
- Responsive design  
- Redirect handling for Single Page Application on Netlify  

---

## 🛠️ Tech Stack

- React.js  
- React Router DOM  
- CSS (or your CSS framework)  
- Netlify for deployment  

---

## 📦 Getting Started

### Prerequisites

- Node.js and npm installed ([download here](https://nodejs.org/))  

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dhruvii99/upflairs-auth-app.git
```
2. Navigate into the project directory:
```bash
cd upflairs-auth-app
```
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm start
```
5. Open your browser and go to:
```bash
http://localhost:3000
```
### Build and Deploy
Build for production
```bash
npm run build
```
Deploy on Netlify
Push your code to GitHub

Netlify will automatically build and deploy your app

Make sure you have a netlify.toml file configured for SPA routing
### 📄 Redirect configuration for Netlify
To handle client-side routing on Netlify, a netlify.toml file is included with the following redirect rule:
```bash
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
### 🤝 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.
### 📞 Contact
Created by Dhruvi Khandelwal — GitHub
### 📜 License
This project is licensed under the MIT License.
