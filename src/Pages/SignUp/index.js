import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import firebase from "../../config/firebase";

import { styles } from "./styles";
import SingInBtn from "../../component/SingInBtn";
import BackBtn from "../../component/BackBtn";
import InputPassword from "../../component/InputPassword";
import Footer from "../../component/Footer";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [errorRegister, setErrorRegister] = useState("");

  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        let user = userCredential.user;
        navigation.navigate("Home", { idUser: user.uid });
      })
      .catch((error) => {
        setErrorRegister(true);
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  };
  return (
    <>
      <BackBtn onClick={() => navigation.navigate("SignIn_Up")} />
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.title}>Cadastro</Text>
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
            onChangeText={(text) => setNovaSenha(text)}
            value={novaSenha}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Repita sua senha..."
            type="text"
            onChangeText={(text) => setSenha(text)}
            value={senha}
          />
          {errorRegister === true ? (
            <View style={styles.contentAlert}>
              <Feather name="alert-circle" size={24} color="#FF6347" />
              <Text style={styles.warningAlert}>Erro! Tente novamente.</Text>
            </View>
          ) : (
            <View />
          )}
          {email === "" || novaSenha === "" || novaSenha != senha ? (
            <TouchableOpacity disabled={true} style={styles.disabled}>
              <Text>Entrar</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.entrarbtn} onPress={register}>
              <Text>Entrar</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity>
            <Text style={styles.text}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </>
  );
}
