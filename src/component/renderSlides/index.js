import React from "react";
import { Image, View, Text } from "react-native";

import { styles } from "./styles";

export default function renderSlides({ item }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text} </Text>
    </View>
  );
}
