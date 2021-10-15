import firebase from "./firebase";
import * as Facebook from "expo-facebook";

export async function loginFacebook() {
  var provider = new firebase.auth.FacebookAuthProvider();

  firebase;
  try {
    await Facebook.initializeAsync({
      appId: "395883745348832",
    });
    const { type, token, expirationDate, permissions, declinedPermissions } =
      await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
    if (type === "success") {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );
      Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
      navigation.navigate("Inicio");
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}
