import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";

const NavigationScreen = () => {
  const dataBooking = useSelector((state) => state?.bookData);

  return (
    <ScrollView>
      {[dataBooking?.properties]?.map((data, index) => {
        console.log(data);
        return (
          <View
            key={index}
            style={{
              backgroundColor: "white",
              padding: 10,
              margin: 10,
              paddingBottom: 20,
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {data?.name}
            </Text>
            <View
              style={{
                flexDirection: "row-reverse",
                gap: 10,
                alignItems: "center",
                paddingTop: 5,
              }}
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text>{data?.rating}</Text>
              <Text
                style={{
                  backgroundColor: "#003580",
                  color: "white",
                  paddingHorizontal: 5,
                  paddingVertical: 6,
                  borderRadius: 6,
                }}
              >
                Genius Level
              </Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default NavigationScreen;
