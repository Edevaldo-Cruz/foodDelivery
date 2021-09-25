import React from "react";
import {
  View,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";
import Menu from "../../component/Menu";
import ItensMenu from "../../component/ItensMenu";

export default function Home() {
  return (
    <>
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
          contentContainerStyle={{ paddingEnd: 30 }}
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
            <Menu
              image={require("../../assets/potato-chips.png")}
              color={"#CCC"}
            >
              <Text>Lanches</Text>
            </Menu>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.title}>
          <View>
            <Text
              style={{
                fontSize: 24,
                paddingHorizontal: 30,
                fontWeight: "bold",
              }}
            >
              Menu
            </Text>
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

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingEnd: 30 }}
          style={styles.containerList}
        >
          <View>
            <View>
              <ItensMenu
                image={require("../../assets/card1.png")}
                color={"rgba(52, 152, 219, 0.3)"}
              >
                <Text>Burgues</Text>
              </ItensMenu>
            </View>
            <View>
              <ItensMenu
                image={require("../../assets/card4.png")}
                color={"rgba(155, 89, 182, 0.3)"}
              >
                <Text>Frutas</Text>
              </ItensMenu>
            </View>
          </View>
          <View>
            <View>
              <ItensMenu
                image={require("../../assets/card2.png")}
                color={"rgba(155, 89, 182, 0.3)"}
              >
                <Text>Pizza</Text>
              </ItensMenu>
            </View>
            <View>
              <ItensMenu
                image={require("../../assets/card5.png")}
                color={"rgba(52, 152, 219, 0.3)"}
              >
                <Text>Sushi</Text>
              </ItensMenu>
            </View>
          </View>
          <View>
            <View>
              <ItensMenu
                image={require("../../assets/card3.png")}
                color={"rgba(52, 152, 219, 0.3)"}
              >
                <Text>BBQ</Text>
              </ItensMenu>
            </View>
            <View>
              <ItensMenu
                image={require("../../assets/card6.png")}
                color={"rgba(155, 89, 182, 0.3)"}
              >
                <Text>Noodle</Text>
              </ItensMenu>
            </View>
          </View>
        </ScrollView>

        <View style={styles.title}>
          <View>
            <Text
              style={{
                fontSize: 24,
                paddingHorizontal: 30,
                fontWeight: "bold",
              }}
            >
              Proximo de você!
            </Text>
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

        <View style={styles.nearMe}>
          <View style={{ marginLeft: 30, marginTop: "2%" }}>
            <Image source={require("../../assets/Rectangle.png")} />
          </View>
          <View style={styles.textNear}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Slice and Mix Restaurant
            </Text>
            <View style={styles.text}>
              <Entypo name="location-pin" size={14} color="black" />
              <View style={{ marginLeft: 6 }}>
                <Text>13 th Street, 46 W 12 th St, NY</Text>
              </View>
            </View>
            <View style={styles.text}>
              <Ionicons name="time-outline" size={14} color="black" />
              <View style={{ marginLeft: 6 }}>
                <Text>20 min - 5.1 km</Text>
              </View>
            </View>
            <View style={{ marginTop: 8 }}>
              <Image source={require("../../assets/star5.png")} />
            </View>
          </View>
        </View>
        <View style={styles.nearMe}>
          <View style={{ marginLeft: 30, marginTop: "2%" }}>
            <Image source={require("../../assets/Rectangle.png")} />
          </View>
          <View style={styles.textNear}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Slice and Mix Restaurant
            </Text>
            <View style={styles.text}>
              <Entypo name="location-pin" size={14} color="black" />
              <View style={{ marginLeft: 6 }}>
                <Text>13 th Street, 46 W 12 th St, NY</Text>
              </View>
            </View>
            <View style={styles.text}>
              <Ionicons name="time-outline" size={14} color="black" />
              <View style={{ marginLeft: 6 }}>
                <Text>15 min - 4 km</Text>
              </View>
            </View>
            <View style={{ marginTop: 8 }}>
              <Image source={require("../../assets/star3.png")} />
            </View>
          </View>
        </View>
        <View style={styles.nearMe}>
          <View style={{ marginLeft: 30, marginTop: "2%" }}>
            <Image source={require("../../assets/Rectangle.png")} />
          </View>
          <View style={styles.textNear}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Slice and Mix Restaurant
            </Text>
            <View style={styles.text}>
              <Entypo name="location-pin" size={14} color="black" />
              <View style={{ marginLeft: 6 }}>
                <Text>13 th Street, 46 W 12 th St, NY</Text>
              </View>
            </View>
            <View style={styles.text}>
              <Ionicons name="time-outline" size={14} color="black" />
              <View style={{ marginLeft: 6 }}>
                <Text>10 min - 3.5 km</Text>
              </View>
            </View>
            <View style={{ marginTop: 8 }}>
              <Image source={require("../../assets/star4.png")} />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
