import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6kskfVj77bo3lYYArQssLNrstaQDovBg",
  authDomain: "fooddelivery-43798.firebaseapp.com",
  projectId: "fooddelivery-43798",
  storageBucket: "fooddelivery-43798.appspot.com",
  messagingSenderId: "537785048119",
  appId: "1:537785048119:web:c2e8e81e1230aea173b3b2",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
