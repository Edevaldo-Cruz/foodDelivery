import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9lBym0R-NXx9DAuTOrZQZfZpxsh4Eg18",
  authDomain: "food-ed753.firebaseapp.com",
  projectId: "food-ed753",
  storageBucket: "food-ed753.appspot.com",
  messagingSenderId: "393124503623",
  appId: "1:393124503623:web:e5d7162118e6d686b65162",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
