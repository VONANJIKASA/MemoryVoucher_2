import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SendCoinScreen = (props) => {
  console.log("check 3 passed");
  return (
    <View style={styles.container}>
      <Text> Send Coins screen </Text>
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

export default SendCoinScreen;
