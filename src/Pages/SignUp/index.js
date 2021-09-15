import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}>Cadastro</Text>
      </View>
      <View>
        <TextInput style={styles.input} placeholder="Nome Do Usuario" />
        <TextInput style={styles.input} placeholder="Senha" />
        <TextInput style={styles.input} placeholder="Repita sua senha" />
        <TouchableOpacity
          style={styles.entrarbtn}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  entrarbtn: {
    backgroundColor: "#D35",
    width: 354,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    marginBottom: 20,
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
});
