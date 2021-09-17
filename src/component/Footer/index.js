import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

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
        <TouchableOpacity>
          <Image
            source={require("../../assets/facebook.png")}
            style={styles.imageSocialFacebook}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity>
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

const styles = StyleSheet.create({
  footer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  textLine: {
    flexDirection: "row",
    alignItems: "center",
    width: 384,
  },
  line: {
    borderBottomColor: "#4D34495E",
    width: 260,
    borderBottomWidth: 1,
    marginRight: "3%",
  },
  containerImage: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageFooter: {
    width: 240,
    height: 150,
  },
  imageSocialFacebook: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginLeft: 30,
    marginBottom: 25,
  },
  imageSocialGoogle: {
    width: 50,
    height: 50,
    marginRight: 50,
    marginBottom: 25,
  },
});
