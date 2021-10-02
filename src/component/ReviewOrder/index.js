import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

export default function ReviewOrder() {
  return (
    <View style={styles.containerImg}>
      <View>
        <Image source={require("../../assets/Rectang.png")} />
      </View>

      <View>
        <Text style={styles.title}>Dogmie jagong tutung</Text>

        <View style={styles.containerText}>
          <AntDesign name="like2" size={18} color="black" />
          <Text> 999+ </Text>
          <Text> | </Text>
          <AntDesign name="dislike2" size={18} color="black" />
          <Text> 93+</Text>
        </View>
        <Text style={styles.text}>$99.99</Text>
      </View>

      <View style={styles.containerLike}>
        <TouchableOpacity style={styles.deslike}>
          <AntDesign name="dislike2" size={18} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.like}>
          <AntDesign name="like2" size={18} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
