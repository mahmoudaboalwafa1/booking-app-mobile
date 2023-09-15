import React from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";

const HomeFooter = () => {
  return (
    <>
      <Text
        style={{ marginHorizontal: 10, marginBottom: 10, fontWeight: "bold" }}
      >
        Travel More Spend Less
      </Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <View
          style={{
            borderColor: "#e0e0e0",
            borderWidth: 2,
            borderRadius: 10,
            height: 130,
            width: 200,
            marginLeft: 10,
          }}
        >
          <Text style={{ padding: 10 }}>10% Discounts</Text>
          <Text style={{ padding: 10 }}>
            Enjoy Discounts at participating at properties worldwide
          </Text>
        </View>
        <View
          style={{
            borderColor: "#e0e0e0",
            borderWidth: 2,
            borderRadius: 10,
            height: 130,
            width: 200,
            marginHorizontal: 10,
          }}
        >
          <Text style={{ padding: 10 }}>15% Discounts</Text>
          <Text style={{ padding: 10 }}>complete 5 stay to unlock level 2</Text>
        </View>
        <View
          style={{
            backgroundColor: "#003580",
            borderRadius: 10,
            height: 130,
            width: 200,
            marginRight: 10,
          }}
        >
          <Text style={{ color: "white", padding: 10 }}>Genius</Text>
          <Text style={{ color: "white", padding: 10 }}>
            you are ate genius level one in our loyalty program
          </Text>
        </View>
      </ScrollView>

      <Pressable
        style={{
          alignItems: "center",
        }}
      >
        <Image
          style={{ height: 100, width: 200, resizeMode: "cover" }}
          source={require("../../assets/booking.com.png")}
          alt="booking.com"
        />
      </Pressable>
    </>
  );
};

export default HomeFooter;
