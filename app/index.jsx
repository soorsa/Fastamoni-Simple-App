import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const index = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <Text style={styles.Text}>
          {user ? "Hello " : "You are not Singed In"}
          {user?.fullName || user?.email}
        </Text>
        {!user ? (
          <TouchableOpacity>
            <Link href="/LoginPage" style={styles.Link}>
              Login Now
            </Link>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Link href="/Profile" style={styles.Link}>
              Edit Profile
            </Link>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  Text: {
    color: "black",
    // fontFamily: "poppins",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "condensedBold",
  },
  Container: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    marginHorizontal: "5%",
    textAlign: "center",
    borderColor: "silver",
    borderRadius: 10,
    padding: 50,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    top: 300,
  },
  Link: {
    textAlign: "center",
    color: "blue",
    backgroundColor: "lightblue",
    paddingHorizontal: 0,
    paddingVertical: 20,
    borderRadius: 20,
    width: "100%",
    fontSize: 20,
  },
});
