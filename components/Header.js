import React from "react";
import { View, Text, Pressable } from "react-native";
import { Fontisto, Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#003580",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 5,
        paddingBottom: 10,
      }}
    >
      <Pressable style={{ flexDirection: "row" }}>
        <Text style={{ color: "white", paddingLeft: 10 }}>Taxi</Text>
        <Fontisto name="uber" size={24} color="white" />
      </Pressable>
      <Pressable style={{ flexDirection: "row" }}>
        <Text style={{ color: "white", paddingLeft: 10 }}>Car Rental</Text>
        <Ionicons name="car-sport-outline" size={24} color="white" />
      </Pressable>
      <Pressable style={{ flexDirection: "row" }}>
        <Text style={{ color: "white", paddingLeft: 10 }}>Flights</Text>
        <Ionicons name="ios-airplane-outline" size={24} color="white" />
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          borderColor: "white",
          borderWidth: 1,
          borderRadius: 25,
          padding: 10,
        }}
      >
        <Text style={{ color: "white", paddingLeft: 10 }}>Stays</Text>
        <Ionicons name="bed-outline" size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default Header;
