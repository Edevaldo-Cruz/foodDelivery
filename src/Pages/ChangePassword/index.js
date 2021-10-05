import React from "react";
import { View, Text } from "react-native";

import InputPassword from "../../component/InputPassword";
import SingInBtn from "../../component/SingInBtn";
import { styles } from "./styles";

export default function ChangePassword() {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text>Digite sua senha antiga</Text>
          <InputPassword />
        </View>
        <View>
          <Text>Digite sua nova senha</Text>
          <InputPassword />
          <InputPassword />
        </View>
        <SingInBtn />
      </View>
    </>
  );
}
