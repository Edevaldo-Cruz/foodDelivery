import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function InputPassword(props) {
  return (
    <TextInput
      secureTextEntry={true}
      style={styles.input}
      placeholder={props.placeholder}
    />
  );
}

const styles = StyleSheet.create({
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
