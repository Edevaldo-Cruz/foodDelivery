import { StatusBar } from "expo-status-bar";
import React from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts, Bangers_400Regular } from "@expo-google-fonts/bangers";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";

import Routes from "./src/router";

export default function App() {
  let [fontsLoaded] = useFonts({
    Bangers_400Regular,
    Roboto_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}
