// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqMyuGOKv05xqCyDTtdinPOAbPqyjZ1bU",
  authDomain: "upflairs-auth.firebaseapp.com",
  projectId: "upflairs-auth",
  storageBucket: "upflairs-auth.firebasestorage.app",
  messagingSenderId: "325761841827",
  appId: "1:325761841827:web:19e0b02259a93254c6dd16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// ✅ Initialize Firebase Authentication and export it
export const auth = getAuth(app);