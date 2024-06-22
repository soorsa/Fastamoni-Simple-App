import {
  Alert,
  ScrollView,
  VirtualizedList,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/userSlice";

const LoginPage = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.user);
  const [fullName, setFullName] = useState(user.fullName);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateUser({ fullName }));
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0, marginTop: 0 }}>
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={{ height: 300, width: "100%" }}
        />
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              marginVertical: 10,
              textAlign: "center",
            }}>
            EDIT YOUR PROFILE
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputWrapper()}>
            <AntDesign
              name="user"
              size={20}
              color={"gray"}
              style={{ marginHorizontal: 10 }}
            />
            <TextInput
              onChangeText={setFullName}
              value={fullName}
              placeholder="Full Name"
              keyboardType="default"
              autoCapitalize="none"
              autoComplete="off"
              style={{ width: "85%", fontSize: 18 }}
            />
          </View>
          <TouchableOpacity
            onPress={handleUpdate}
            style={styles.submitBtn("black")}>
            {loader === false ? (
              <Text style={{ color: "white", fontSize: 20 }}>S U B M I T</Text>
            ) : (
              <ActivityIndicator color={"white"} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  submitBtn: (bgColor) => ({
    // backgroundColor: "#00131f",
    color: "#fff",
    height: 50,
    paddingHorizontal: 30,
    paddingVertical: 5,
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: bgColor,
  }),
  formContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    flex: 1,
    width: "90%",
  },
  inputWrapper: (borderColor) => ({
    borderColor: borderColor,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 12,
    height: 50,
    marginVertical: 10,
  }),
  errorWrapper: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
});
