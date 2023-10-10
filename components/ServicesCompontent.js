import React from "react";
import { View, Text } from "react-native";

const ServicesComponent = ({ services }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        gap: 10,
        marginTop: 10,
      }}
    >
      {services.map((serv) => (
        <Text
          style={{
            backgroundColor: "#0077ff",
            color: "white",
            borderRadius: 6,
            paddingVertical: 4,
            paddingHorizontal: 3,
          }}
          key={serv.id}
        >
          {serv.name}
        </Text>
      ))}
    </View>
  );
};

export default ServicesComponent;
