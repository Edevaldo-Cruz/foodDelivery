import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

export default function MyProfile(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <View style={styles.text}>
        <Text>{props.children}</Text>
      </View>
      <View>
        <AntDesign name="right" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
}
