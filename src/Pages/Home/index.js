import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

import Menu from "../../component/Menu";
import ItensMenu from "../../component/ItensMenu";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.searchContainer}>
        <View style={styles.input}>
          <AntDesign
            style={styles.AntDesign}
            name="search1"
            size={20}
            color="#000000"
          />

          <TextInput placeholder="Pesquisar" />
        </View>
      </View>
      <View style={styles.location}>
        <Entypo name="location-pin" size={24} color="black" />
        <Text> Sua Localização </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.containerMenu}
      >
        <TouchableOpacity>
          <Menu image={require("../../assets/coffee-cup.png")} color={"#CCC"}>
            <Text>Bebidas</Text>
          </Menu>
        </TouchableOpacity>

        <TouchableOpacity>
          <Menu image={require("../../assets/burger.png")} color={"#D35400"}>
            <Text>Food</Text>
          </Menu>
        </TouchableOpacity>
        <TouchableOpacity>
          <Menu
            image={require("../../assets/piece-of-cake.png")}
            color={"#CCC"}
          >
            <Text>Bolos</Text>
          </Menu>
        </TouchableOpacity>
        <TouchableOpacity>
          <Menu image={require("../../assets/potato-chips.png")} color={"#CCC"}>
            <Text>Lanches</Text>
          </Menu>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.title}>
        <View>
          <Text style={{ fontSize: 24, paddingHorizontal: 30 }}>Menu</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: 30,
          }}
        >
          <TouchableOpacity>
            <Text style={{ textAlignVertical: "bottom" }}>Ver Todos</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView horizontal style={styles.containerList}>
        <View>
          <ItensMenu
            image={require("../../assets/card1.png")}
            color={"#3498DB"}
          >
            <Text>Burgues</Text>
          </ItensMenu>
        </View>

        <ItensMenu image={require("../../assets/card2.png")} color={"#9B59B6"}>
          <Text>Pizza</Text>
        </ItensMenu>
        <ItensMenu image={require("../../assets/card3.png")} color={"#3498DB"}>
          <Text>BBQ</Text>
        </ItensMenu>
      </ScrollView>
      <ScrollView horizontal style={styles.containerList}>
        <ItensMenu image={require("../../assets/card4.png")} color={"#9B59B6"}>
          <Text>Burgues</Text>
        </ItensMenu>
        <ItensMenu image={require("../../assets/card5.png")} color={"#3498DB"}>
          <Text>Pizza</Text>
        </ItensMenu>
        <ItensMenu image={require("../../assets/card6.png")} color={"#9B59B6"}>
          <Text>BBQ</Text>
        </ItensMenu>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    paddingTop: "20%",
    alignItems: "center",
  },
  AntDesign: {
    padding: 20,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#CCC",
    width: 354,
    height: 50,
    borderRadius: 30,
  },
  location: {
    paddingTop: "2%",
    paddingLeft: 30,
    flexDirection: "row",
  },
  containerMenu: {
    padding: "2%",
  },
  title: {
    flex: 1,
    flexDirection: "row",
  },
  containerList: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: "2%",
  },
});
