// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR0pyln6BYFxoURnVKeQE4x5xDEDU6Xyg",
  authDomain: "control-drugs.firebaseapp.com",
  projectId: "control-drugs",
  storageBucket: "control-drugs.appspot.com",
  messagingSenderId: "713564965269",
  appId: "1:713564965269:web:cd6b29707f59f561ea4e9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {app, db}