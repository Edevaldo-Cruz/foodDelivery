import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export default function ItensMenu(props) {
  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: props.color,
          width: 130,
          height: 122,
          borderRadius: 20,
          marginLeft: 30,
          marginTop: 16,
        }}
      >
        <View style={styles.containerText}>
          <View>
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
