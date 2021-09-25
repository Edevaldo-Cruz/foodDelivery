import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

export default function GreyBtn(props) {
  return (
    <TouchableOpacity style={styles.inscreverbtn} onPress={props.onClick}>
      <Text style={styles.inscrever}>{props.children}</Text>
    </TouchableOpacity>
  );
}
