import React from "react";
import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import BtnReturn from "../../component/BtnReturn";
import { styles } from "./styles";
import TabBar from "../../component/TabBar";

export default function Payment() {
  return (
    <>
      <View style={styles.container}>
        <View>
          <BtnReturn>
            <Text> Forma de Pagamento</Text>
          </BtnReturn>
        </View>

        <View style={styles.row}>
          <Image
            style={styles.image}
            source={require("../../assets/paypal.png")}
          />
          <Text style={{ textAlign: "left" }}>Paypal</Text>
          <Text style={styles.text}>itoh@gmail.com</Text>
          <AntDesign
            style={styles.image}
            name="right"
            size={24}
            color="black"
          />
        </View>
        <View></View>
        <View></View>
      </View>
      <TabBar />
    </>
  );
}
