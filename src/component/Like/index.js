import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";
import iconAnimation from "../iconAnimation";

const Like = () => {
  const [trigger, setTrigger] = useState(false);
  const { IconFilled, IconRegular } = iconAnimation(trigger);

  return (
    <TouchableOpacity activeOpacity={1} onPress={() => setTrigger(!trigger)}>
      <Animated.View style={(IconRegular, styles.disable)}>
        <AntDesign name="like2" size={18} color="black" />
      </Animated.View>
      <Animated.View style={[IconFilled, styles.active]}>
        <AntDesign name="like2" size={18} color="white" />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  disable: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CCC",
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  active: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#D35400",
    width: 25,
    height: 25,
    borderRadius: 50,
  },
});

export default Like;
