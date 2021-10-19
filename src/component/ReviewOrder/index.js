import React, { useState } from "react";
import { View, Image, Text } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import Like from "../Like";
import Dislike from "../Dislike";

import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ReviewOrder() {
  const [count, setCount] = useState(0);
  const like = () => setCount((prevCount) => prevCount + 1);
  const [count2, setCount2] = useState(0);
  const dislike = () => setCount2((prevCount) => prevCount + 1);

  return (
    <View style={styles.containerImg}>
      <View>
        <Image source={require("../../assets/Rectang.png")} />
      </View>

      <View>
        <Text style={styles.title}>Dogmie jagong tutung</Text>

        <View style={styles.containerText}>
          <AntDesign name="like2" size={18} color="black" />
          <Text> {count} </Text>
          <Text> | </Text>
          <AntDesign name="dislike2" size={18} color="black" />
          <Text> {count2}</Text>
        </View>
        <Text style={styles.text}>$99.99</Text>
      </View>
      <TouchableOpacity onPress={like}>
        <Like />
      </TouchableOpacity>
      <TouchableOpacity onPress={dislike}>
        <Dislike />
      </TouchableOpacity>
    </View>
  );
}
