import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCl6vStIBMVL1WW3u9oZhJuRYRcPHRaSIo",
  authDomain: "amin-coffee-6138a.firebaseapp.com",
  projectId: "amin-coffee-6138a",
  storageBucket: "amin-coffee-6138a.appspot.com",
  messagingSenderId: "988699823071",
  appId: "1:988699823071:web:68d0aed179974bf745126a",
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
export { db, auth };
