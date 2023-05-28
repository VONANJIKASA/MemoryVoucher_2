import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import colors from "../constants/colors";
import { updateLoggedInUserData } from "../store/authSlice";
import { updateSignedInUserData } from "../utils/actions/authActions";

export default CoinTally = (props) => {
  const userData = useSelector((state) => state.auth.userData);

  return (
    <View style={styles.container}>
      <View style={styles.tallyTab}>
        <Text style={styles.text}>Unbanked Coins</Text>
        <Text style={styles.text}> {userData.unbankedCoins}</Text>
      </View>
      <View style={styles.tallyTab}>
        <Text style={styles.text}>Banked Coins</Text>
        <Text style={styles.text}> {userData.bankedCoins} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: "row",
    paddingVertical: 8,
  },
  text: {
    fontSize: 28,
    color: colors.textColor,
    letterSpacing: 0.01,
    fontSize: 18,
    fontFamily: "black",
  },
  tallyTab: {
    borderRadius: 1,
    borderColor: colors.grey,
    borderWidth: 2,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
