import { React, useState, useEffect, useCallback } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator";
import AuthScreen from "../screens/AuthScreen";
import { useSelector } from "react-redux";
import StartUpScreen from "../screens/StartUpScreen";

const AppNavigator = (props) => {
  const [count, setCount] = useState(0);
  const isAuth = useSelector(
    (state) => state.auth.token !== null && state.auth.token !== ""
  );

  const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin);
  return (
    <NavigationContainer>
      {isAuth && <MainNavigator />}
      {!isAuth && didTryAutoLogin && <AuthScreen />}
      {!isAuth && !didTryAutoLogin && <StartUpScreen />}
      <Text style={styles.label}>
        {count} Let's Do This {count}
      </Text>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "black",
    fontSize: 0,
    fontFamily: "black",
    textAlign: "center",
  },
});

export default AppNavigator;
