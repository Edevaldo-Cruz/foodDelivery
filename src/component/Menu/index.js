import React from "react";
import { View, Image, Text } from "react-native";

import { styles } from "./styles";

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
