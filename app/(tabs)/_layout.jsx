import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="Profile"
          options={{
            title: "Profile",
            headerShown: false,
            headerTitle: "Profile",
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? "person" : "person-outline"}
                  size={24}
                  color="blue"
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="edit-profile"
          options={{
            title: "EditProfile",
            headerShown: false,
            headerTitle: "Edit Profile",
            tabBarActiveTintColor: "black",
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? "pencil" : "pencil-outline"}
                  size={24}
                  color="blue"
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: "About",
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? "book" : "book-outline"}
                  size={24}
                  color="blue"
                />
              );
            },
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
