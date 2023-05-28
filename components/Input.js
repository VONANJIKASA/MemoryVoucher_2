import { StyleSheet, TextInput, View, Text } from "react-native";
import colors from "../constants/colors";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

const Input = (props) => {
  const [value, setValue] = useState(props.initialValue);
  const onChangeText = (text) => {
    setValue(text);
    props.onInputChanged(props.id, text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}> {props.label} </Text>
      <View style={styles.inputContainer}>
        {props.icon && (
          <props.iconPack
            name={props.icon}
            size={props.iconSize || 15}
            color="black"
            style={styles.icon}
          />
        )}
        <TextInput
          {...props}
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
        />
      </View>

      {props.errorText && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.errorText[0]}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "red",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 2,
    backgroundColor: colors.nearlyWhite,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
    color: colors.grey,
    alignItems: "center",
  },
  label: {
    marginVertical: 8,
    fontFamily: "mainBold",
    letterSpacing: 0.3,
    color: colors.textColor,
  },
  input: {
    color: colors.textColor,
    flex: 1,
    fontFamily: "mainRegular",
    letterSpacing: 0.3,
    paddingTop: 0,
    alignItems: "center",
  },
  errorContainer: {
    marginVertical: 3,
  },
  errorText: {
    color: "red",
    //fontFamily: "mainRegular",
    letterSpacing: 0.1,
    fontSize: 10,
  },
});

export default Input;
