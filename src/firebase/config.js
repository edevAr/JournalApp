// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLT2ff4lAlmRG4uxKnipC2y-OLKzLbbhA",
  authDomain: "react-training-53806.firebaseapp.com",
  projectId: "react-training-53806",
  storageBucket: "react-training-53806.appspot.com",
  messagingSenderId: "162260547909",
  appId: "1:162260547909:web:9b24e2bd7f4ec02a91262c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);