import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ServicesComponent from "../../components/ServicesCompontent";
import { services } from "../../data";

const RoomsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { properties, adults, rooms, children } = route.params;
  const [selected, setSelected] = useState([]);

  navigation.setOptions({
    title: "Available Rooms",
    headerTitleStyle: { color: "white" },
    headerTitleAlign: "center",
    headerStyle: { backgroundColor: "#003580" },
  });
  return (
    <>
      <ScrollView>
        {properties.rooms.map((room, indexParent) => (
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

            <Pressable
              style={{
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                borderColor: "#318ce7",
                borderWidth: 2,
                borderRadius: 6,
                padding: 10,
                marginTop: 15,
              }}
            >
              <TouchableOpacity
                style={{ width: "100%" }}
                onPress={() => {
                  setSelected([...selected, room.name]);
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
              </TouchableOpacity>
              {selected.map((name) =>
                name === room.name ? (
                  <AntDesign
                    style={{ position: "absolute", right: 20 }}
                    name="closecircle"
                    size={20}
                    color="red"
                    onPress={() =>
                      setSelected(
                        selected.filter((s) =>
                          s === room.name ? "" : selected
                        )
                      )
                    }
                  />
                ) : null
              )}
            </Pressable>
          </Pressable>
        ))}
        {selected?.length > 0 && (
          <Pressable
            onPress={() =>
              navigation.navigate("User", {
                selectedRooms: selected,
                adults,
                properties,
                children,
                rooms,
              })
            }
            style={{
              backgroundColor: "#0077ff",
              padding: 10,
              position: "relative",
              bottom: 0,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Reverse
            </Text>
          </Pressable>
        )}
      </ScrollView>
    </>
  );
};

export default RoomsScreen;
