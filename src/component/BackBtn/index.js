import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

export default function BackBtn(props) {
  return (
    <TouchableOpacity style={styles.btn} onPress={props.onClick}>
      <AntDesign name="left" size={24} color="#000" />
    </TouchableOpacity>
  );
}
