import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import BottomNavBar from "@/navigation/BottomNavBar";
import { registerRootComponent } from "expo";

import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import LoginPage from "../screens/LoginPage";
import Profile from "../screens/Profile";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  // tabBarStyle: {
  //   position: "absolute",
  //   height: 70,
  //   width: "95%",
  //   backgroundColor: "chocolate",
  //   elevation: 5,
  //   flex: 1,
  //   justifyContent: "center", // center vertically
  //   alignItems: "center",
  //   left: 0,
  //   bottom: 20,
  //   right: 0,
  //   // marginHorizontal: "auto",
  //   borderRadius: 10,
  // },
  tabBarStyle: {
    position: "absolute",
    height: 70,
    width: "95%",
    backgroundColor: "chocolate",
    elevation: 5,
    left: "2.5%", // Adjust left positioning to center horizontally
    bottom: 20,
    borderRadius: 10,
    borderColor: "chocolate",
    // flexDirection: "row", // Set flexDirection to row to use justifyContent and alignItems
    // justifyContent: "center", // Center horizontally
    // alignItems: "center", // Center vertically
  },
};
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Provider store={store}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </Provider>
    </ThemeProvider>
  );
}
