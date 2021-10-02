import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import SingInBtn from "../../component/SingInBtn";
import BackBtn from "../../component/BackBtn";
import Footer from "../../component/Footer";
import InputPassword from "../../component/InputPassword";
import { styles } from "./styles";

// import firebase from "../../config/firebase";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigation = useNavigation();

  /*function loginFirebase() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      })*/

  return (
    <>
      <BackBtn onClick={() => navigation.navigate("SignIn_Up")} />

      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.title}>Login</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Nome Do Usuario"
            onChangeText={(email) => setEmail(email)}
            value={email}
          />
          <InputPassword
            placeholder="Senha"
            onChangeText={(senha) => setSenha(senha)}
            value={senha}
          />

          <SingInBtn
            onClick={() => {
              // loginFirebase("Home");
              navigation.navigate("Home");
            }}
          >
            <Text>Entrar</Text>
          </SingInBtn>

          <TouchableOpacity>
            <Text style={styles.text}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </>
  );
}
