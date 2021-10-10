import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BtnReturn from "../../component/BtnReturn";
import { styles } from "./styles";
import SingInBtn from "../../component/SingInBtn";
import TabBar from "../../component/TabBar";
import GreyBtn from "../../component/GreyBtn";

export default function RemoveCredit() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          <BtnReturn onClick={() => navigation.navigate("Payment")}>
            <Text>Credit Card</Text>
          </BtnReturn>
        </View>

        <View style={styles.row}>
          <View style={styles.image}>
            <Image source={require("../../assets/Group.png")} />
          </View>
          <View style={styles.rowText}>
            <Text style={styles.text1}>Credit Card</Text>
            <Text style={styles.text2}>4444 **** **** 6739</Text>
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
