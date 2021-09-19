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
    marginLeft: 30,
    marginTop: 15,
    width: 130,
    height: 130,
  },
  containerText: {
    width: 120,
    height: 120,
    borderRadius: 30,
  },
  menuBtn: {},
  text: {
    color: "#FFF",
    fontSize: 18,
    left: 15,
    top: 8,
  },
  image: {
    width: 100,
    height: 100,
    left: 30,
    borderRadius: 20,
  },
});
