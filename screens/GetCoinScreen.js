import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const GetCoinScreen = (props) => {
  console.log("check 3 passed");
  return (
    <View style={styles.container}>
      <Text> Get Coin screen </Text>
      <Button
        title="Go to Game"
        onPress={() => {
          props.navigation.navigate("Game");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GetCoinScreen;
