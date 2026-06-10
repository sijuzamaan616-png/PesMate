// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Tcxv8ila8ljVQpHr6wN4muPc2LonE1Y",
  authDomain: "pesmate-91fff.firebaseapp.com",
  projectId: "pesmate-91fff",
  storageBucket: "pesmate-91fff.firebasestorage.app",
  messagingSenderId: "259437559714",
  appId: "1:259437559714:web:2c78438d97daf3c192fcfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
