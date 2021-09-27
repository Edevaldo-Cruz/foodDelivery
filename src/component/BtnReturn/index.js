import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

export default function BtnReturn(props) {
  return (
    <View style={styles.btnReturn}>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={props.onClick}>
          <AntDesign name="left" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </View>
  );
}
