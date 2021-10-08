import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BtnReturn from "../../component/BtnReturn";
import ReviewOrder from "../../component/ReviewOrder";
import { styles } from "./styles";

export default function Order() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <BtnReturn onClick={() => navigation.navigate("Inicio")}>
          <Text>Ultimos Pedidos</Text>
        </BtnReturn>
      </View>
      <View style={styles.list}>
        <ReviewOrder />
        <ReviewOrder />
        <ReviewOrder />
        <ReviewOrder />
        <ReviewOrder />
        <ReviewOrder />
        <ReviewOrder />
        <ReviewOrder />
      </View>
    </ScrollView>
  );
}
