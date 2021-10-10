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
          <BtnReturn onClick={() => navigation.navigate("Inicio")}>
            <Text>Minha Lista</Text>
          </BtnReturn>
        </View>

        <View>
          <View style={styles.rowText}>
            <Text style={styles.text}>(Vazio)</Text>
          </View>
        </View>
      </View>
      <View style={styles.btn}>
        <SingInBtn onClick={() => navigation.navigate("Inicio")}>
          <Text>Adicionar</Text>
        </SingInBtn>
      </View>
    </>
  );
}
