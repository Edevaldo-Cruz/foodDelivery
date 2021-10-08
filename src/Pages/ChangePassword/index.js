import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import InputPassword from "../../component/InputPassword";
import SingInBtn from "../../component/SingInBtn";
import BtnReturn from "../../component/BtnReturn";
import { styles } from "./styles";
import TabBar from "../../component/TabBar";

export default function ChangePassword() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View>
          <BtnReturn onClick={() => navigation.navigate("Perfil")}>
            <Text>Perfil</Text>
          </BtnReturn>
          <Text style={styles.text}>Digite sua senha</Text>
          <InputPassword placeholder="Senha" />
        </View>
        <View>
          <Text style={styles.text}>Digite sua nova senha</Text>
          <InputPassword placeholder="Digite sua nova senha" />
          <InputPassword placeholder="Digite novamente sua nova senha" />
        </View>
      </View>
      <View style={styles.btn}>
        <SingInBtn>
          <Text>Salvar</Text>
        </SingInBtn>
      </View>
      <TabBar />
    </>
  );
}
