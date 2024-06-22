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
  Entypo,
} from "@expo/vector-icons";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { AsyncStorage } from "react-native";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const [loader, setLoader] = useState(false);
  const [resData, setResData] = useState(null);
  const [obsecureText, setObsecureText] = useState(true);

  const inValidForm = () => {
    Alert.alert(
      (title = "Invalid form"),
      (message = "Please provide valid Email and Password"),
      [{ text: "Try Again", onPress: () => {} }]
    );
  };

  const loginFctn = async (values) => {
    setLoader(true);
    try {
      const endpoint = "https://reqres.in/api/register/";
      const response = await axios.post(endpoint, {
        email,
        fullName,
        password,
      });
      if (response.status === 200) {
        dispatch(setUser({ email, fullName }));
        setLoader(false);
        setResData(response.data);
        console.log(resData);
        navigation.replace("index");
      } else {
        Alert.alert(
          (title = "Oops error logging in"),
          (message = "Please provide valid Username and Password"),
          [{ text: "Try Again", onPress: () => {} }]
        );
      }
    } catch (error) {
      console.log(error.message);
      Alert.alert(
        (title = "Incorrect Credentials"),
        (message = JSON.stringify(error.message)),
        [{ text: "Try Again", onPress: () => {} }]
      );
    } finally {
      setLoader(false);
    }
  };

  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0, marginTop: 0 }}>
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          // style={styles.reactLogo}
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
            R E G I S T E R
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputWrapper()}>
            <Entypo
              name="email"
              size={20}
              color={"gray"}
              style={{ marginHorizontal: 10 }}
            />
            <TextInput
              onChangeText={setEmail}
              value={email}
              placeholder="Email"
              keyboardType="email"
              autoCapitalize="none"
              autoComplete="off"
              style={{ width: "85%", fontSize: 18 }}
            />
          </View>
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
              placeholder="Username"
              keyboardType="default"
              autoCapitalize="none"
              autoComplete="off"
              style={{ width: "85%", fontSize: 18 }}
            />
          </View>
          <View style={styles.inputWrapper()}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={20}
              color={"gray"}
              style={{ marginHorizontal: 10 }}
            />
            <TextInput
              onChangeText={setPassword}
              value={password}
              placeholder="Enter Password"
              keyboardType="default"
              autoCapitalize="none"
              secureTextEntry={obsecureText}
              style={{ width: "80%", fontSize: 18 }}
            />
            <TouchableOpacity
              onPress={() => {
                setObsecureText(!obsecureText);
              }}>
              <MaterialCommunityIcons
                size={20}
                name={obsecureText ? "eye-outline" : "eye-off-outline"}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={loginFctn}
            style={styles.submitBtn("black")}>
            {loader === false ? (
              <Text style={{ color: "white", fontSize: 20 }}>S I G N U P</Text>
            ) : (
              <ActivityIndicator color={"white"} />
            )}
          </TouchableOpacity>
          <View
            style={{
              display: "flex",
              marginTop: 20,
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}>
            <Text style={{ fontSize: 16 }}>Already have an account?</Text>
            <Link href="/LoginPage" style={{ fontSize: 20, color: "blue" }}>
              Login
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

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
    // paddingVertical: 12,
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    // width: "80%",
    // marginHorizontal: "10%",
    borderRadius: 12,
    // backgroundColor: "white",
    height: 50,
    marginVertical: 10,
  }),
  errorWrapper: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    // color:#ff00001d
  },
});
