import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import userImage from "../assets/images/userImage.jpeg";
import colors from "../constants/colors";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import {
  launchImagePicker,
  uploadImageAsync,
} from "../utils/imagePickerHelper";
import { updateSignedInUserData } from "../utils/actions/authActions";
import { updateLoggedInUserData } from "../store/authSlice";
import { useDispatch } from "react-redux";

const ProfileImage = (props) => {
  const dispatch = useDispatch();
  const source = props.uri ? { uri: props.uri } : userImage;
  const [image, setImage] = useState(source);
  const [isLoading, setIsLoading] = useState(false);
  const userId = props.userId;

  const pickImage = async () => {
    try {
      const tempUri = await launchImagePicker();
      if (!tempUri) return;

      // upload image
      setIsLoading(true);
      const uploadUrl = await uploadImageAsync(tempUri);
      setIsLoading(false);

      if (!uploadUrl) {
        throw new Error("Could not upload image");
      }
      const newData = { profilePicture: uploadUrl };

      await updateSignedInUserData(userId, newData);
      dispatch(updateLoggedInUserData({ newData }));

      setImage({ uri: uploadUrl });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      {isLoading ? (
        <View
          height={props.size}
          width={props.size}
          style={styles.loadingContainer}
        >
          <ActivityIndicator size={"small"} color={colors.primary} />
        </View>
      ) : (
        <Image
          style={{
            ...styles.image,
            ...{ width: props.size, height: props.size },
          }}
          source={image}
        />
      )}

      <View style={styles.editIconContain}>
        <Entypo name="edit" size={20} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 50,
    borderColor: colors.grey,
    borderWidth: 1,
  },
  editIconContain: {
    position: "absolute",
    bottom: -5,
    right: -5,
    backgroundColor: colors.lightGrey,
    borderRadius: 20,
    padding: 8,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileImage;
