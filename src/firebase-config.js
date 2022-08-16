// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqQ6WuOeFpHcMVAyWFcH5cy-qNCZ0_X0M",
  authDomain: "crypto-4cad9.firebaseapp.com",
  projectId: "crypto-4cad9",
  storageBucket: "crypto-4cad9.appspot.com",
  messagingSenderId: "251661613038",
  appId: "1:251661613038:web:d4e7fbe397df80e0d540ff",
  measurementId: "G-5CB4JC1YT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
