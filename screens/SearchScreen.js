import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, TextInput, Button } from "react-native";

const SearchScreen = () => {
  return (
    <View style={{ marginTop: 40, marginHorizontal: 10 }}>
      <View
        style={{
          borderColor: "#ffc72c",
          borderWidth: 4,
          borderRadius: 10,
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Feather name="search" size={22} color="black" />
        <TextInput placeholder="Enter your destination" />
      </View>
    </View>
  );
};

export default SearchScreen;
