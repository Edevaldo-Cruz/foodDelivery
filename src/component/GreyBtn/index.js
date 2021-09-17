import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function GreyBtn(props) {
  return (
    <TouchableOpacity style={styles.inscreverbtn} onPress={props.onClick}>
      <Text style={styles.inscrever}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
