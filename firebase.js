// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4fEx1QaB_23pfZqWVR_NrfvpoCgNfapY",
  authDomain: "ecommerce-b8a3c.firebaseapp.com",
  projectId: "ecommerce-b8a3c",
  storageBucket: "ecommerce-b8a3c.firebasestorage.app",
  messagingSenderId: "367089715486",
  appId: "1:367089715486:web:2dacae4a81d71556ac610f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);