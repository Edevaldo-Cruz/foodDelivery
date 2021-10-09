import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BtnReturn from "../../component/BtnReturn";
import { styles } from "./styles";
import SingInBtn from "../../component/SingInBtn";
import TabBar from "../../component/TabBar";

export default function AddCreditCard() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          <BtnReturn onClick={() => navigation.navigate("Payment")}>
            <Text>Adicionar novo cartão</Text>
          </BtnReturn>
        </View>

        <View style={styles.image}>
          <Image source={require("../../assets/card.png")} />
        </View>

        <View style={styles.row}>
          <Text>Banco:</Text>
          <Text style={styles.text}>AZRAEN Bank</Text>
        </View>
        <View style={styles.row}>
          <Text>Nome:</Text>
          <Text style={styles.text}>Itoh</Text>
        </View>
        <View style={styles.row}>
          <Text>Numero do Cartão:</Text>
          <Text style={styles.text}>444 3784 1380 6739</Text>
        </View>
        <View style={styles.row}>
          <Text>Data de Validade:</Text>
          <Text style={styles.text}>02/22</Text>
        </View>
        <View style={styles.row}>
          <Text>CVV:</Text>
          <Text style={styles.text}>877</Text>
        </View>
      </View>
      <View style={styles.btn}>
        <SingInBtn>
          <Text>Adicionar</Text>
        </SingInBtn>
      </View>
      <TabBar />
    </>
  );
}
