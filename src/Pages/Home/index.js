import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

import Menu from "../../component/Menu";

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
      <View style={styles.containerFood}>
        <View style={styles.menuBtn}>
          <Text style={styles.text}>Burgues</Text>
          <Image
            style={styles.image}
            source={require("../../assets/card1.png")}
          />
        </View>
      </View>
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
  containerFood: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: "2%",
  },
  menuBtn: {
    backgroundColor: "#3498DB",
    width: 130,
    height: 130,
    borderRadius: 30,
  },
  txt: {},
  image: {
    width: 130,
    height: 130,

    left: 10,
    borderRadius: 20,
  },
});
