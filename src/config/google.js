import firebase from "./firebase";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";

export async function loginGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  const redirect = getAuth();
  signInWithRedirect(redirect, provider);

  actionLoginGoogle: async () => {
    let result = loginGoogle();

    if (result) {
      navigation.navigate("Inicio");
    } else {
      alert("error");
    }
  };
}
