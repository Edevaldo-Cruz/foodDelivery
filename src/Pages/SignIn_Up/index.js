import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import SingInBtn from "../../component/SingInBtn";
import GreyBtn from "../../component/GreyBtn";
import Footer from "../../component/Footer";

export default function SignIn_Up() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../../assets/hamburger.png")}
          style={styles.image}
        />
        <SingInBtn onClick={() => navigation.navigate("SignIn")}>
          <Text>Entrar</Text>
        </SingInBtn>

        <GreyBtn onClick={() => navigation.navigate("SignUp")}>
          <Text>inscrever-se</Text>
        </GreyBtn>
      </View>

      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 270,
    height: 270,
    marginBottom: 40,
  },
});
