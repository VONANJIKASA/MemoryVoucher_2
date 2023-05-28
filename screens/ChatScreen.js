import React, { useCallback, useState } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//import backgroundImage from "../assets/images/ChatBackground.png";
import backgroundImage from "../assets/images/ChatBackground4.png";
import colors from "../constants/colors";
import { KeyboardAvoidingView } from "react-native";

const ChatScreen = (props) => {
  const [bankedMessageText, setbankedMessageText] = useState("");
  const [unbankedMessageText, setunbankedMessageText] = useState("");
  console.log(bankedMessageText);
  console.log(unbankedMessageText);

  const sendUnbankedMessage = useCallback(() => {
    setunbankedMessageText("");
  }, [unbankedMessageText]);

  const sendBankedMessage = useCallback(() => {
    setbankedMessageText("");
  }, [bankedMessageText]);

  return (
    <SafeAreaView edges={["right", "left", "bottom"]} style={styles.container}>
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
      >
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}
        ></ImageBackground>
        <Text> Send Banked Coins</Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={{ ...styles.mediaButton, ...styles.sendButton }}
            onPress={() => console.log("Pressed!")}
          >
            <MaterialCommunityIcons
              name="hand-coin"
              size={24}
              color={"white"}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.textbox}
            value={bankedMessageText}
            keyboardType="numeric"
            onChangeText={(text) => setbankedMessageText(text)}
            onSubmitEditing={sendBankedMessage}
          />

          {bankedMessageText !== "" && !isNaN(bankedMessageText) && (
            <TouchableOpacity
              style={{ ...styles.mediaButton, ...styles.sendButton }}
              onPress={sendBankedMessage}
            >
              <MaterialCommunityIcons name="send" size={24} color={"white"} />
            </TouchableOpacity>
          )}
        </View>

        <Text> Send UnBanked Coins</Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={{ ...styles.mediaButton, ...styles.sendButton }}
            onPress={() => console.log("Pressed!")}
          >
            <MaterialCommunityIcons
              name="hand-coin-outline"
              size={24}
              color={"white"}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.textbox}
            keyboardType="numeric"
            value={unbankedMessageText}
            onChangeText={(text2) => setunbankedMessageText(text2)}
            onSubmitEditing={sendUnbankedMessage}
          />

          {unbankedMessageText !== "" && !isNaN(unbankedMessageText) && (
            <TouchableOpacity
              style={{ ...styles.mediaButton, ...styles.sendButton }}
              onPress={sendUnbankedMessage}
            >
              <MaterialCommunityIcons name="send" size={24} color={"white"} />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  textbox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.lightGrey,
    marginHorizontal: 15,
    paddingHorizontal: 12,
  },
  mediaButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
  },
  sendButton: {
    backgroundColor: colors.black,
    borderRadius: 50,
  },
  screen: {
    flex: 1,
  },
});

export default ChatScreen;
