
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyC_YA3aaUPI3kXbZQRT7k2NtYOcVhD32-A",
  authDomain: "portfolio-5dd71.firebaseapp.com",
  projectId: "portfolio-5dd71",
  storageBucket: "portfolio-5dd71.firebasestorage.app",
  messagingSenderId: "390870636946",
  appId: "1:390870636946:web:984d0f596d2668a4d5c94b",
  measurementId: "G-9Q5E53RYNX"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);