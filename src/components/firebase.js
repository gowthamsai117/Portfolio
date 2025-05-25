
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAONAOk8BihA9UNWW0SZVVNKe2QA0NrY3Y",
  authDomain: "protfolio-like-and-views-d3307.firebaseapp.com",
  projectId: "protfolio-like-and-views-d3307",
  storageBucket: "protfolio-like-and-views-d3307.firebasestorage.app",
  messagingSenderId: "429834263029",
  appId: "1:429834263029:web:0e869d1c05687fe491a8bc",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
