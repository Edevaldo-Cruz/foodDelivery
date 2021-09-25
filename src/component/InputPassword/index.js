import React from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";

export default function InputPassword(props) {
  return (
    <TextInput
      secureTextEntry={true}
      style={styles.input}
      placeholder={props.placeholder}
    />
  );
}
