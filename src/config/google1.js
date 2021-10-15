import firebase from "./firebase";

export default {
  loginGoogle: async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    let result = await firebase.auth().signInWithPopup(provider);
    return result;
  },

  actionLoginGoogle: async () => {
    let result = loginGoogle();

    if (result) {
      navigation.navigate("Inicio");
    } else {
      alert("error");
    }
  },
};
