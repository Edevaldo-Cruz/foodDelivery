import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import BtnReturn from "../../component/BtnReturn";
import { styles } from "./styles";
import TabBar from "../../component/TabBar";
import { useNavigation } from "@react-navigation/native";

export default function Payment() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          <BtnReturn onClick={() => navigation.navigate("Perfil")}>
            <Text> Forma de Pagamento</Text>
          </BtnReturn>
        </View>

        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.navigate("RemovePaypal")}
        >
          <View style={styles.image}>
            <Image source={require("../../assets/paypal.png")} />
          </View>
          <View style={styles.rowText}>
            <Text style={styles.text1}>Paypal</Text>
            <Text style={styles.text2}>itoh@gmail.com</Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.navigate("RemoveCredit")}
        >
          <View style={styles.image}>
            <Image source={require("../../assets/Group.png")} />
          </View>
          <View style={styles.rowText}>
            <Text style={styles.text1}>Credit Card</Text>
            <Text style={styles.text2}>4444 **** **** 6739</Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.navigate("AddCreditCard")}
        >
          <View>
            <Image
              style={styles.credit}
              source={require("../../assets/credit-card.png")}
            />
          </View>
          <View style={styles.rowText}>
            <Text style={styles.text1}>Adicione nova forma de pagamento</Text>
          </View>
          <View style={styles.plus}>
            <AntDesign name="plus" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <TabBar />
    </>
  );
}
