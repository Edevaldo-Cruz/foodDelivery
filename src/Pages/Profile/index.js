import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Image, View } from "react-native";

import { styles } from "./styles";
import MyProfile from "../../component/MyProfile";
import GreyBtn from "../../component/GreyBtn";

export default function Profile() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={require("../../assets/Ellipse.png")} />
        <Text style={styles.text}>Ithoh</Text>
        <Text style={styles.number}>+ 1 11229382748</Text>
      </View>
      <View style={styles.links}>
        <MyProfile>
          <Text>Meu Perfil</Text>
        </MyProfile>
        <MyProfile onClick={() => navigation.navigate("ChangePassword")}>
          <Text>Mudar Senha</Text>
        </MyProfile>
        <MyProfile onClick={() => navigation.navigate("Payment")}>
          <Text>Forma de Pagamento</Text>
        </MyProfile>
        <MyProfile onClick={() => navigation.navigate("MyVoucher")}>
          <Text>Meus Cupons</Text>
        </MyProfile>
        <MyProfile>
          <Text>Notificação</Text>
        </MyProfile>
        <MyProfile>
          <Text>Sobre Nos</Text>
        </MyProfile>
        <MyProfile>
          <Text>Contatos</Text>
        </MyProfile>
      </View>
      <GreyBtn>
        <Text>Sair</Text>
      </GreyBtn>
    </View>
  );
}
