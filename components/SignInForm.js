import React, { useCallback, useReducer, useEffect, useState } from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";
import Input from "../components/Input";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";

import colors from "../constants/colors";
import validate from "validate.js";
import {
  validateEmail,
  validatePassword,
  validateString,
} from "../utils/validationConstraints";
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducer";
import { signIn, signUp } from "../utils/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const isTestMode = false;

const initialState = {
  inputValues: {
    email: isTestMode ? "vonanjikasa@gmail.com" : "",
    password: isTestMode ? "hahaha" : "",
  },
  inputValidities: {
    email: isTestMode,
    password: isTestMode,
  },
  formIsValid: isTestMode,
};

const SignInForm = (props) => {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const [isLoading, setIsLoading] = useState(false);

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validationResult: result, inputValue });
    },
    [dispatchFormState]
  );

  useEffect(() => {
    if (error) {
      Alert.alert("An error occured", error);
    }
  }, [error]);

  const authHandler = useCallback(async () => {
    try {
      setIsLoading(true);

      const action = signIn(
        formState.inputValues.email,
        formState.inputValues.password
      );
      setError(null);
      await dispatch(action);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, [dispatch, formState]);

  return (
    <>
      <View style={styles.imageContainer}>
        <Text style={styles.welcome}>Welcome Back!</Text>
      </View>

      <Input
        id="email"
        label="Email"
        icon="envelope-o"
        iconPack={FontAwesome}
        iconSize={25}
        errorText={formState.inputValidities["email"]}
        onInputChanged={inputChangedHandler}
        keyboardType="email-address"
        autoCapitalize="none"
        value={formState.inputValidities["email"]}
      />
      <Input
        id="password"
        label="Password"
        icon="lock"
        iconPack={FontAwesome}
        iconSize={25}
        errorText={formState.inputValidities["password"]}
        onInputChanged={inputChangedHandler}
        autoCapitalize="none"
        value={formState.inputValidities["password"]}
        secureTextEntry
      />

      {isLoading ? (
        <ActivityIndicator
          size={"small"}
          color={colors.blue}
          style={{ marginTop: 10 }}
        />
      ) : (
        <SubmitButton
          disabled={!formState.formIsValid}
          title="Sign In"
          onPress={authHandler}
          style={{ marginTop: 20 }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  link: {
    color: colors.blue,
    //fontFamily: "mainRegular",
    letterSpacing: 0.1,
    fontSize: 12,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "50%",
    height: "30%",
  },
  welcome: {
    fontSize: 35,
    fontFamily: "mainRegular",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
});

export default SignInForm;
