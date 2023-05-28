import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { useState, useEffect, useCallback } from "react";
import CoinTally from "../components/CoinTally";
import { useDispatch, useSelector } from "react-redux";
import { updateSignedInUserData } from "../utils/actions/authActions";
import { updateLoggedInUserData } from "../store/authSlice";

const MainScreen = (props) => {
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  const [bankedCoins, setBankedCoins] = useState(userData.bankedCoins);
  const [unbankedCoins, setUnbankedCoins] = useState(userData.unbankedCoins);
  console.log("1banked coins", { bankedCoins }, "1unbanked coins", {
    unbankedCoins,
  });

  const newData = { bankedCoins, unbankedCoins };

  updateSignedInUserData(userData.userId, newData);

  //trying to not get that error of infinite loops
  useEffect(() => {
    dispatch(updateLoggedInUserData({ newData }));
  }, [bankedCoins]);

  const clickHandlerBank = () => {
    console.log("i was pressed");
    if (unbankedCoins > 0) {
      setBankedCoins(bankedCoins + 1);
      setUnbankedCoins(unbankedCoins - 1);
    } else {
      Alert.alert("You have banked all your coins.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{userData.firstName}</Text>
      <CoinTally />

      <Button title="Bank Coin" onPress={clickHandlerBank} />
      <Button
        title="Your Friends"
        onPress={() => {
          props.navigation.navigate("Friend List");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  label: {
    color: "black",
    fontSize: 18,
    fontFamily: "black",
  },
});

export default MainScreen;
