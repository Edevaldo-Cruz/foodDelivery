import React from "react";
import { Text, View } from "react-native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { styles } from "./styles";

export default function TabBar() {
  return (
    <View style={styles.color}>
      <View style={styles.container}>
        <View style={styles.itens}>
          <FontAwesome5 name="store" size={22} color="rgba(0, 0, 0, 0.5)" />
          <Text style={styles.text}> Inicio</Text>
        </View>
        <View style={styles.itens}>
          <MaterialCommunityIcons
            name="clipboard-list"
            size={22}
            color="rgba(0, 0, 0, 0.5)"
          />
          <Text style={styles.text}>Pedidos</Text>
        </View>
        <View style={styles.itens}>
          <Ionicons name="ios-bookmark" size={22} color="rgba(0, 0, 0, 0.5)" />
          <Text style={styles.text}>Minha Lista</Text>
        </View>
        <View style={styles.itens}>
          <FontAwesome name="user" size={22} color="#D35400" />
          <Text style={styles.text}>Perfil</Text>
        </View>
      </View>
    </View>
  );
}
