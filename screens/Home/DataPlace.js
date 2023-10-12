import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, Button } from "react-native";
import { Dimensions } from "react-native";
import { services } from "../../data";
import ServicesComponent from "../../components/ServicesCompontent";

const DataPlace = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");

  const { properties, rooms, children, adults, date } = route.params;
  const widthPhone = width - 330;
  const heightPhone = height - 750;

  navigation.setOptions({
    headerTitle: properties.name,
    headerStyle: { backgroundColor: "#003580" },
    headerTitleStyle: { color: "white" },
    headerTitleAlign: "center",
  });
  return (
    <View style={{ padding: 10 }}>
      <View
        style={{
          flexDirection: "row-reverse",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
          paddingBottom: 10,
          alignItems: "center",
        }}
      >
        {properties.photos.slice(0, 5).map((photo) => {
          return (
            <Image
              style={{
                width: widthPhone,
                height: heightPhone,
                borderRadius: 10,
              }}
              source={{ uri: photo.image }}
              key={photo.id}
            />
          );
        })}
        <Text>Show More</Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {properties.name}
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
              <Text>{properties.rating}</Text>
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
          <Text
            style={{
              color: "white",
              backgroundColor: "green",
              padding: 3,
              borderRadius: 6,
            }}
          >
            Travel Available
          </Text>
        </View>
        <Text
          style={{
            height: 1,
            borderWidth: 1.5,
            borderColor: "#e0e0e0",
            marginTop: 15,
          }}
        />
        <View style={{ padding: 10 }}>
          <Text>Price For 1 Nights And {adults} Adults</Text>
          <View style={{ flexDirection: "row-reverse" }}>
            <Text
              style={{
                color: "red",
                textDecorationLine: "line-through",
                fontSize: 15,
              }}
            >
              {properties.oldPrice - properties.newPrice}
            </Text>
            <Text> Rs</Text>
            <Text> {properties.newPrice}</Text>
          </View>
          <Text
            style={{
              backgroundColor: "green",
              color: "white",
              marginLeft: "auto",
              borderRadius: 6,
              width: 80,
              paddingVertical: 3,
              paddingHorizontal: 7,
              marginTop: 3,
            }}
          >
            28 % OFF
          </Text>
        </View>
        <Text
          style={{
            height: 1,
            borderWidth: 1.5,
            borderColor: "#e0e0e0",
            marginTop: 10,
          }}
        />
        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row-reverse",
              gap: 75,
            }}
          >
            <Text style={{ fontWeight: 500 }}>Check In</Text>
            <Text style={{ fontWeight: 500 }}>Check Out</Text>
          </View>
          <View
            style={{
              flexDirection: "row-reverse",
              gap: 60,
            }}
          >
            <Text style={{ color: "#0074ff" }}>{date.toDateString()}</Text>
            <Text style={{ color: "#0074ff" }}>
              {new Date().toDateString()}
            </Text>
          </View>
          <View>
            <Text style={{ marginTop: 20, fontWeight: 500 }}>
              Rooms And Guests
            </Text>
            <Text style={{ color: "#0074ff" }}>
              {rooms} rooms {adults} adults {children} children
            </Text>
          </View>
          <Text
            style={{
              height: 1,
              borderWidth: 1.5,
              borderColor: "#e0e0e0",
              marginTop: 15,
            }}
          />
          <View>
            <Text style={{ fontWeight: 500, marginTop: 7 }}>
              Most Popular Facilities
            </Text>
            <ServicesComponent services={services} />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            title="Select Availability"
            onPress={() =>
              navigation.navigate("Room", {
                properties,
                rooms,
                children,
                adults,
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default DataPlace;
