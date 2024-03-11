//  imports utiles:

// import { db } from "../firebase/firebaseConfig";
// import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBabhRYX9UZe-Baf2rKb2ggNjYXwSMhJK4",
  authDomain: "entrega-react-ch.firebaseapp.com",
  projectId: "entrega-react-ch",
  storageBucket: "entrega-react-ch.appspot.com",
  messagingSenderId: "586517594551",
  appId: "1:586517594551:web:42809a1f0ae434c9f0a832"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);