import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";

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
