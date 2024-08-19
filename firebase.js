// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCax08aaKOna_djWwLKohtVk6gXM5FIQUc",
  authDomain: "hspantryapp-57552.firebaseapp.com",
  projectId: "hspantryapp-57552",
  storageBucket: "hspantryapp-57552.appspot.com",
  messagingSenderId: "433304215131",
  appId: "1:433304215131:web:a1fc5141b9f1edaea0697e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}