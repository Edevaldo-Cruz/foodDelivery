import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function SingInBtn(props) {
  return (
    <TouchableOpacity style={styles.entrarbtn} onPress={props.onClick}>
      <Text style={styles.entrar}>Entrar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  entrarbtn: {
    backgroundColor: "#D35",
    width: 354,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    marginBottom: 20,
  },
  entrar: {
    fontFamily: "Bangers_400Regular",
    fontStyle: "italic",
    fontSize: 18,
    color: "#FFF",
    textAlign: "center",
  },
});
