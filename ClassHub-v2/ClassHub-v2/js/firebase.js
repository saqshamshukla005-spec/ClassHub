import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5qCcW_pCATWTYQlXBAWfaSKnT3qzMROg",
  authDomain: "classhub-a2bf2.firebaseapp.com",
  projectId: "classhub-a2bf2",
  storageBucket: "classhub-a2bf2.firebasestorage.app",
  messagingSenderId: "788231446286",
  appId: "1:788231446286:web:c6c0a6e27380c00f92815f",
  measurementId: "G-7RMH8QSGXR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
