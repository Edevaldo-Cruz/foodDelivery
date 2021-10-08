import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";

import DeliciousFood from "./Pages/DeliciousFood";
import SignIn_Up from "./Pages/SignIn_Up";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Order from "./Pages/Order";
import MyList from "./Pages/MyList";
import Profile from "./Pages/Profile";
import ChangePassword from "./Pages/ChangePassword";
import Payment from "./Pages/Payment";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 80,
          paddingHorizontal: 35,
          paddingBottom: 20,
        },
        tabBarActiveTintColor: "#D35400",
        tabBarInactiveTintColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="store" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Pedidos"
        component={Order}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="clipboard-list"
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Minha Lista"
        component={MyList}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="ios-bookmark" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DeliciousFood"
        component={DeliciousFood}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn_Up"
        component={SignIn_Up}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
