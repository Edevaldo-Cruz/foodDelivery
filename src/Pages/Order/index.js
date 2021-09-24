import React from "react";
import { StyleSheet, Text, View } from "react-native";

import BackBtn from "../../component/BackBtn";

export default function Order() {
  return (
    <View style={styles.containerTitle}>
      <BackBtn onClick={() => navigation.navigate("Home")} />
      <Text>Ultimos Pedidos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTitle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
