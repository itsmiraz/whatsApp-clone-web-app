// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3IP3zTT5fQMPTdhjtIDkqauJ_rWyw7ss",
  authDomain: "whatsapp-7f4ae.firebaseapp.com",
  projectId: "whatsapp-7f4ae",
  storageBucket: "whatsapp-7f4ae.appspot.com",
  messagingSenderId: "1003646454999",
  appId: "1:1003646454999:web:8b4e404f25fd41bb057492",
  measurementId: "G-7ETZJD72KE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
