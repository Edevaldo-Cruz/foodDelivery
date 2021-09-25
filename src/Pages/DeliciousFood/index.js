import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";

import renderSlides from "../../component/renderSlides";
import { styles } from "./styles";
import SignIn_Up from "../SignIn_Up";

const slides = [
  {
    key: "1",
    image: require("../../assets/assetsDeliciousFood.png"),
    title: "Huumm... Comida gostosa!!",
    text: "Os melhores restaurantes na palma da sua mão!!",
  },
  {
    key: "2",
    image: require("../../assets/Fast.png"),
    title: "Entrega Super Rápida!!",
    text: "Entregamos o mais rápido possível no conforto do seu lar.",
  },
  {
    key: "3",
    image: require("../../assets/certificate.png"),
    title: "Restaurantes Renomados.",
    text: "Trabalhamos com os melhores da região, aclamados pelo público..",
  },
  {
    key: "4",
    image: require("../../assets/Payment.png"),
    title: "Facilidade no pagamento.",
    text: "Aceitamos todos os tipos de pagamentos!!",
  },
];

export default function DeliciousFood() {
  const navigation = useNavigation();
  const [showHome, setShowHome] = useState(false);

  if (showHome) {
    return (
      <>
        <View>
          <SignIn_Up />
        </View>
      </>
    );
  } else {
    return (
      <>
        <StatusBar style={{ backgroundColor: "#D35400" }} />
        <View style={styles.container}>
          <AppIntroSlider
            renderItem={renderSlides}
            data={slides}
            activeDotStyle={styles.activeDot}
            showSkipButton={true}
            renderNextButton={() => {}}
            renderDoneButton={() => <Text style={styles.text}>Acessar</Text>}
            renderSkipButton={() => <Text style={styles.text}>Pular</Text>}
            onDone={() => navigation.navigate("SignIn_Up")}
            onSkip={() => navigation.navigate("SignIn_Up")}
          />
        </View>
      </>
    );
  }
}
