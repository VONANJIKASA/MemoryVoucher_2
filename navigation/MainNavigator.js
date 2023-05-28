import { React, useState, useEffect, useCallback } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import ChatListScreen from "../screens/ChatListScreen";
import SendCoinScreen from "../screens/SendCoinScreen";
import MainScreen from "../screens/MainScreen";
import GetCoinScreen from "../screens/GetCoinScreen";
import ChatScreen from "../screens/ChatScreen";
import Game from "../screens/Game";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerTitle: "", headerShadowVisible: false }}
    >
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Get Coins"
        component={GetCoinScreen}
        options={{
          tabBarLabel: "Get Coins",
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="gamepad" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Friends List"
        component={ChatListScreen}
        options={{
          tabBarLabel: "Friends List",
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesome5 name="user-friends" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="ios-settings-sharp" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeActionList"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Friend List"
        component={ChatListScreen}
        options={{ headerBackTitle: "Back" }}
      />
      <Stack.Screen
        name="Send Coins"
        component={SendCoinScreen}
        options={{ headerBackTitle: "Back" }}
      />
      <Stack.Screen
        name="Get Coins"
        component={GetCoinScreen}
        options={{ headerBackTitle: "Back" }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ headerBackTitle: "Back", headerTitle: "" }}
      />
      <Stack.Screen
        name="Game"
        component={Game}
        options={{ headerBackTitle: "Back", headerTitle: "" }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
