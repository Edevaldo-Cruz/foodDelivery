import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ItensMenu(props) {
  return (
    <TouchableOpacity>
      <View style={styles.containerFood}>
        <View style={(styles.containerText, { backgroundColor: props.color })}>
          <View style={styles.menuBtn}>
            <Text style={styles.text}>{props.children}</Text>
          </View>
          <View>
            <Image style={styles.image} source={props.image} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerFood: {
    marginHorizontal: 30,
  },
  containerText: {
    width: 180,
    height: 180,
  },
  menuBtn: {},
  text: {
    color: "#FFF",
    fontSize: 18,
    left: 15,
    top: 8,
  },
  image: {
    borderRadius: 20,
    top: 8,
  },
});
