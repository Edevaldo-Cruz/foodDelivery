import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import SingInBtn from "../../component/SingInBtn";
import BackBtn from "../../component/BackBtn";
import InputPassword from "../../component/InputPassword";
import Footer from "../../component/Footer";

export default function SignUp() {
  const navigation = useNavigation();
  return (
    <>
      <BackBtn onClick={() => navigation.navigate("SignIn_Up")} />
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.title}>Cadastro</Text>
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Nome Do Usuario" />
          <InputPassword placeholder="Senha" />
          <InputPassword placeholder="Repita sua senha" />
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
