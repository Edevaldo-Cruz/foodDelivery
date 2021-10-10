import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BtnReturn from "../../component/BtnReturn";
import { styles } from "./styles";
import SingInBtn from "../../component/SingInBtn";
import TabBar from "../../component/TabBar";
import GreyBtn from "../../component/GreyBtn";

export default function RemovePaypal() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          <BtnReturn onClick={() => navigation.navigate("Payment")}>
            <Text>Paypal</Text>
          </BtnReturn>
        </View>

        <View style={styles.row}>
          <View style={styles.image}>
            <Image source={require("../../assets/paypal.png")} />
          </View>
          <View style={styles.rowText}>
            <Text style={styles.text1}>Paypal</Text>
            <Text style={styles.text2}>itoh@gmail.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.btn}>
        <SingInBtn>
          <Text>Definir como pagamento padrão</Text>
        </SingInBtn>
        <GreyBtn>
          <Text>Remover</Text>
        </GreyBtn>
      </View>
      <TabBar />
    </>
  );
}
