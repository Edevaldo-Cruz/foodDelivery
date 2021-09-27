import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BtnReturn from "../../component/BtnReturn";
import ReviewOrder from "../../component/ReviewOrder";

export default function Order() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View>
        <BtnReturn onClick={() => navigation.navigate("Home")}>
          <Text>Ultimos Pedidos</Text>
        </BtnReturn>
      </View>
      <ReviewOrder />
    </ScrollView>
  );
}
