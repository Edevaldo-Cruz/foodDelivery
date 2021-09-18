import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function Menu(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <View
          style={{
            backgroundColor: props.color,
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 20,
          }}
        >
          <Image source={props.image} />
        </View>
        <Text>{props.children}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingTop: 8,
    paddingBottom: 2,
  },
  containerImg: {
    alignItems: "center",
    justifyContent: "center",
  },
});
