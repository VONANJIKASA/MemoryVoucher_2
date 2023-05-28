import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const ChatListScreen = (props) => {
  console.log("check 3 passed");
  return (
    <View style={styles.container}>
      <Text> Chat list screen </Text>

      <Button
        title="Go to chat"
        onPress={() => {
          props.navigation.navigate("ChatScreen");
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

export default ChatListScreen;
