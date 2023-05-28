import { StatusBar } from "expo-status-bar";
import { Button, LogBox, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { React, useState, useEffect, useCallback } from "react";
import { Provider } from "react-redux";

import * as SplashScreen from "expo-splash-screen";
import * as font from "expo-font";
import "react-native-gesture-handler";
import AppNavigator from "./navigation/AppNavigator";
import { store } from "./store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

LogBox.ignoreLogs(["AsyncStorage has been extracted"]);
//AsyncStorage.clear();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsLoaded, setAppIsLoaded] = useState(false);

  useEffect(() => {
    //load fonts

    const prepare = async () => {
      try {
        await font.loadAsync({
          black: require("./assets/fonts/Sevillana-Regular.ttf"),
          mainBold: require("./assets/fonts/Andika-Bold.ttf"),
          mainBoldItalic: require("./assets/fonts/Andika-BoldItalic.ttf"),
          mainItalic: require("./assets/fonts/Andika-Italic.ttf"),
          mainRegular: require("./assets/fonts/Andika-Regular.ttf"),
        });
      } catch (error) {
        console.log.error();
      } finally {
        setAppIsLoaded(true);
      }
    };
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsLoaded]);

  if (!appIsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.container} onLayout={onLayout}>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  label: {
    color: "black",
    fontSize: 18,
    fontFamily: "black",
    textAlign: "center",
  },
});
