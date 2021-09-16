import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function BackBtn(props) {
  return (
    <TouchableOpacity style={styles.btn} onPress={props.onClick}>
      <AntDesign name="left" size={24} color="#000" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignSelf: "flex-start",
    width: 30,
    height: 30,
    left: 30,
    top: 79,
  },
});
