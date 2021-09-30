// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6kskfVj77bo3lYYArQssLNrstaQDovBg",
  authDomain: "fooddelivery-43798.firebaseapp.com",
  projectId: "fooddelivery-43798",
  storageBucket: "fooddelivery-43798.appspot.com",
  messagingSenderId: "537785048119",
  appId: "1:537785048119:web:c2e8e81e1230aea173b3b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase;
