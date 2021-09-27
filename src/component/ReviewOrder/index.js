import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

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

const styles = StyleSheet.create({
  containerImg: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    marginLeft: 30,
    marginTop: 85,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  containerText: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  text: {
    fontSize: 14,
    color: "#2ECC71",
    fontWeight: "500",
  },
  containerLike: {
    flexDirection: "row",
    marginRight: 30,
  },
  deslike: {
    marginRight: 10,
    backgroundColor: "#CCC",
    width: 25,
    height: 25,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  like: {
    marginRight: 10,
    backgroundColor: "#CCC",
    width: 25,
    height: 25,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
