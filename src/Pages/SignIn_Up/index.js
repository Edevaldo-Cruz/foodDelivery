import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SingInBtn from "../../component/SingInBtn";

export default function SignIn_Up() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/hamburger.png")}
        style={styles.image}
      />
      <SingInBtn onClick={() => navigation.navigate("SignIn")} />
      <TouchableOpacity
        style={styles.inscreverbtn}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.inscrever}>inscrever-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 60,
  },
  inscreverbtn: {
    backgroundColor: "#CCC",
    width: 354,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    marginBottom: 20,
  },
  inscrever: {
    fontFamily: "Bangers_400Regular",
    fontStyle: "italic",
    fontSize: 18,
    color: "#000",
    textAlign: "center",
  },
});
