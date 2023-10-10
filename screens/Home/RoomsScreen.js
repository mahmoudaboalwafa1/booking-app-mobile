import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ServicesComponent from "../../components/ServicesCompontent";
import { services } from "../../data";

const RoomsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { properties, adults, rooms, children } = route.params;
  navigation.setOptions({
    title: "Available Rooms",
    headerTitleStyle: { color: "white" },
    headerTitleAlign: "center",
    headerStyle: { backgroundColor: "#003580" },
  });
  return (
    <ScrollView>
      {properties.rooms.map((room) => (
        <Pressable
          key={room.id}
          style={{
            margin: 10,
            backgroundColor: "white",
            padding: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#007fff" }}>{room.name}</Text>
            <AntDesign name="infocirlceo" size={24} color="#007fff" />
          </View>
          <Text>Pay at The Property</Text>
          <Text style={{ paddingTop: 5, color: "green" }}>
            Free Canceliation Available
          </Text>
          <Text style={{ fontWeight: 500, fontSize: 16 }}>
            Most Popular Facities
          </Text>
          <ServicesComponent services={services} />
          <TouchableOpacity
            style={{
              flexDirection: "row-reverse",
              alignItems: "center",
              backgroundColor: "white",
              borderColor: "#007fff",
              borderWidth: 2,
              borderRadius: 6,
              padding: 10,
              marginTop: 15,
            }}
          >
            <Text
              style={{
                textTransform: "uppercase",
                color: "#007fff",
                textAlign: "center",
              }}
            >
              select
            </Text>
            <AntDesign name="closecircle" size={24} color="red" />
          </TouchableOpacity>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default RoomsScreen;
