import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

export default function renderSlides({ item }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text} </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontFamily: "Bangers_400Regular",
    fontSize: 32,
    color: "#FFF",
  },
  text: {
    fontFamily: "Bangers_400Regular",
    fontStyle: "italic",
    textAlign: "center",
    paddingVertical: 20,
    fontSize: 20,
    color: "#FFF",
  },
});
