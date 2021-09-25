import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

export default function SingInBtn(props) {
  return (
    <TouchableOpacity style={styles.entrarbtn} onPress={props.onClick}>
      <Text style={styles.entrar}>{props.children}</Text>
    </TouchableOpacity>
  );
}
