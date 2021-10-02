import React from "react";
import { Text, Image, View } from "react-native";

import { styles } from "./styles";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/Ellipse.png")} />
      <Text>Ithoh</Text>
      <Text>+ 1 11229382748</Text>
    </View>
  );
}
