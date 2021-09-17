import React from "react";
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

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <>
      <BackBtn onClick={() => navigation.navigate("SignIn_Up")} />

      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.title}>Login</Text>
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Nome Do Usuario" />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Senha"
          />
          <SingInBtn onClick={() => navigation.navigate("Home")}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  containerText: {
    alignSelf: "flex-start",

    paddingLeft: 30,
  },
  title: {
    fontFamily: "Bangers_400Regular",
    fontStyle: "italic",
    fontSize: 24,
    color: "#000",
    marginBottom: 30,
  },
  entrar: {
    textAlign: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#CCC",
    width: 354,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    marginBottom: 20,
    paddingLeft: 25,
  },
  text: {
    alignSelf: "flex-end",
  },
});
