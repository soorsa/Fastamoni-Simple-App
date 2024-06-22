import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { Link } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  Ionicons,
  Fontisto,
  Feather,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, setUser } from "../../redux/userSlice";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const logout = () => {
    Alert.alert((title = "Logout"), (message = "Are you sure to Logout?"), [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          dispatch(setUser(""));
        },
      },
    ]);
  };
  const deleteAccount = () => {
    Alert.alert(
      (title = "Delete Account"),
      (message = "Are you sure to delete account?"),
      [
        {
          text: "NO, Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Yes, delete", onPress: () => navigation.navigate("index") },
      ]
    );
  };

  return (
    <ScrollView>
      {!user ? (
        <View>
          <Image
            source={require("@/assets/images/partial-react-logo.png")}
            style={{ height: 250, width: "100%", backgroundColor: "silver" }}
          />
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              width: "100%",
            }}>
            <Image
              source={require("@/assets/images/partial-react-logo.png")}
              style={{
                width: 150,
                height: 150,
                borderRadius: 75,
                borderWidth: 10,
                borderColor: "white",
                marginTop: -75,
                alignSelf: "center",
              }}
            />
          </View>
          <View
            style={{
              alignSelf: "center",
              alignItems: "center",
              marginBottom: 15,
            }}>
            <Text style={{ fontSize: 20 }}>Oops...</Text>
            <Text
              style={{
                backgroundColor: "#f5000023",
                paddingHorizontal: 15,
                paddingVertical: 3,
                fontStyle: "italic",
                color: "gray",
                borderRadius: 10,
              }}>
              Sorry you are not logged in
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.signinBtn}
              onPress={() => navigation.navigate("LoginPage")}>
              <Ionicons name="log-in" size={20} color="#000000" />
              <Text style={styles.tileText}>S I G N I N</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <Image
            source={require("@/assets/images/partial-react-logo.png")}
            style={{ height: 250, width: "100%", backgroundColor: "silver" }}
          />
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              width: "100%",
            }}>
            <Image
              source={require("@/assets/images/partial-react-logo.png")}
              style={{
                width: 150,
                height: 150,
                borderRadius: 75,
                borderWidth: 10,
                borderColor: "white",
                marginTop: -75,
                alignSelf: "center",
              }}
            />
          </View>
          <View
            style={{
              alignSelf: "center",
              alignItems: "center",
              marginBottom: 15,
            }}>
            <Text style={{ fontSize: 20 }}>
              {user.fullName || "Complete your profile"}
            </Text>
            <Text
              style={{
                backgroundColor: "#d2691e24",
                paddingHorizontal: 15,
                paddingVertical: 3,
                fontStyle: "italic",
                color: "gray",
                borderRadius: 10,
              }}>
              {user.email}
            </Text>
          </View>
          <View>
            <TouchableOpacity style={styles.tile}>
              <AntDesign name="user" size={20} color="#000000" />
              <Link href="/home">
                <Text style={styles.tileText}>Edit Profile</Text>
              </Link>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.tile}>
              <AntDesign name="heart" size={20} />
              <Text style={styles.tileText}>Favourites</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.tile}>
              <MaterialCommunityIcons name="truck-delivery" size={20} />
              <Text style={styles.tileText}>My Orders</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.tile}
              onPress={(e) => deleteAccount()}>
              <Ionicons name="trash" size={20} />
              <Text style={styles.tileText}>Delete Account</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.tile} onPress={() => logout()}>
              <Ionicons name="log-out" size={20} color="#000000" />
              <Text style={styles.tileText}>Log out</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.tile}>
              <MaterialCommunityIcons name="book" size={20} color="#000000" />
              <Text style={styles.tileText}>About us</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  tile: {
    backgroundColor: "white",
    marginVertical: 2.5,
    width: "75%",
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 15,
    paddingLeft: 25,
    borderRadius: 8,
    flexDirection: "row",
    gap: 20,
  },
  tileText: {
    fontSize: 15,
  },
  signinBtn: {
    backgroundColor: "white",
    marginVertical: 2.5,
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 15,
    // paddingLeft: 25,
    borderRadius: 50,
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },
});
