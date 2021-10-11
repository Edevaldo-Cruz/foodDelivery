import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import BackBtn from "../../component/BackBtn";
import Footer from "../../component/Footer";
import { styles } from "./styles";

import firebase from "../../config/firebase";

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const loginFirebase = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        let user = userCredential.user;
        navigation.navigate("Home", { idUser: user.uid });
      })
      .catch((error) => {
        setErrorLogin(true);
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  };

  useEffect(() => {}, []);

  return (
    /*<KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >*/
    <>
      <BackBtn onClick={() => navigation.navigate("SignIn_Up")} />

      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.title}>Login</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email..."
            type="text"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Digite sua senha..."
            type="text"
            onChangeText={(text) => setSenha(text)}
            value={senha}
          />
          {errorLogin === true ? (
            <View style={styles.contentAlert}>
              <Feather name="alert-circle" size={24} color="#FF6347" />
              <Text style={styles.warningAlert}>Email ou senha invalido.</Text>
            </View>
          ) : (
            <View />
          )}
          {email === "" || senha === "" ? (
            <TouchableOpacity disabled={true} style={styles.disabled}>
              <Text style={styles.entrar}>Entrar</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.entrarbtn} onPress={loginFirebase}>
              <Text style={styles.entrar}>Entrar</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity>
            <Text style={styles.text}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
      <View style={{ height: 20 }} />
    </>
  );
}
