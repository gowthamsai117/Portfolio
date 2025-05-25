// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgIN1Rx5QtT4Ou-hOnkyMdy5hlHVH1N-8",
  authDomain: "portfolio-likes-and-views.firebaseapp.com",
  projectId: "portfolio-likes-and-views",
  storageBucket: "portfolio-likes-and-views.firebasestorage.app",
  messagingSenderId: "798219883938",
  appId: "1:798219883938:web:0c6a61bc8e039910428efb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);