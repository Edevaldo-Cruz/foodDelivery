import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import BtnReturn from "../../component/BtnReturn";
import { styles } from "./styles";
import SingInBtn from "../../component/SingInBtn";
import TabBar from "../../component/TabBar";

export default function MyVoucher() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          <BtnReturn onClick={() => navigation.navigate("Perfil")}>
            <Text>Meus cupons</Text>
          </BtnReturn>
          <View style={styles.row}>
            <View style={styles.voucher}>
              <Image source={require("../../assets/voucher.png")} />
            </View>
            <View>
              <Text style={styles.text}>Desconto de 30% para Pizza</Text>
              <View style={styles.dateRow}>
                <Ionicons name="time-outline" size={14} color="black" />
                <Text> 01 Out - 30 Out </Text>
              </View>
              <Text style={styles.warning}>Faltam XX dias</Text>
            </View>
            <TouchableOpacity style={styles.check}>
              <MaterialIcons name="check" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <View style={styles.voucher}>
              <Image source={require("../../assets/voucher.png")} />
            </View>
            <View>
              <Text style={styles.text}>Desconto de 30% para Pizza</Text>
              <View style={styles.dateRow}>
                <Ionicons name="time-outline" size={14} color="black" />
                <Text> 01 Out - 30 Out </Text>
              </View>
              <Text style={styles.warning}>Faltam XX dias</Text>
            </View>
            <TouchableOpacity style={styles.disabled}></TouchableOpacity>
          </View>
          <View style={styles.row}>
            <View style={styles.voucher}>
              <Image source={require("../../assets/voucher.png")} />
            </View>
            <View>
              <Text style={styles.text}>Desconto de 30% para Pizza</Text>
              <View style={styles.dateRow}>
                <Ionicons name="time-outline" size={14} color="black" />
                <Text> 01 Out - 30 Out </Text>
              </View>
              <Text style={styles.warning}>Faltam XX dias</Text>
            </View>
            <TouchableOpacity style={styles.disabled}></TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.btn}>
        <SingInBtn>
          <Text style={styles.text}>Adicionar</Text>
        </SingInBtn>
      </View>
      <TabBar />
    </>
  );
}
