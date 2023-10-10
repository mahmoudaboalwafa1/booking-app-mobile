import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { View, TextInput, Button } from "react-native";
import PlaceResult from "../components/PlaceResult";

const SearchScreen = () => {
  const [place, setPlace] = useState("");
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
        <TextInput
          placeholder="Enter your destination"
          value={place}
          onChangeText={(text) => setPlace(text)}
        />
      </View>
      <PlaceResult place={place} setPlace={setPlace} />
    </View>
  );
};

export default SearchScreen;
