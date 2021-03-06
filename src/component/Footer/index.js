import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { loginFacebook } from "../../config/facebook";
import loginGoogle from "../../config/google";

import { styles } from "./styles";

export default function Footer() {
  return (
    <>
      <View style={styles.footer}>
        <View style={styles.textLine}>
          <View style={styles.line} />
          <Text>Ou entre com</Text>
        </View>
      </View>
      <View style={styles.containerImage}>
        <Image
          source={require("../../assets/PngItem_39514.png")}
          style={styles.imageFooter}
          resizeMode="cover"
        />
        <TouchableOpacity onPress={loginFacebook}>
          <Image
            source={require("../../assets/facebook.png")}
            style={styles.imageSocialFacebook}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={loginGoogle}>
          <Image
            source={require("../../assets/google-plus.png")}
            style={styles.imageSocialGoogle}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
