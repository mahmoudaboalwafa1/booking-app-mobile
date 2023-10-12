import React, { useLayoutEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addBookData } from "../../reducer/actions";

const ConfirmationScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();
  const { selectedRooms, adults, properties, children, rooms } = route.params;
  useLayoutEffect(() => {
    const unsub = navigation.setOptions({
      headerStyle: { backgroundColor: "#003580" },
      headerTitleStyle: { color: "white" },
      headerTitleAlign: "center",
    });

    return unsub;
  }, []);

  const handleConfirmation = () => {
    navigation.replace("main");
    dispatch(addBookData(route.params));
  };

  return (
    <View style={{ backgroundColor: "white", margin: 5, borderRadius: 5 }}>
      <View
        style={{
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
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
          <Text style={{ color: "#0074ff" }}>2021/6/26</Text>
          <Text style={{ color: "#0074ff" }}>2023/8/09</Text>
        </View>
        <View>
          <Text style={{ marginTop: 20, fontWeight: 500 }}>
            Rooms And Guests
          </Text>
          <Text style={{ color: "#0074ff" }}>
            {rooms} rooms {adults} adults {children} children
          </Text>
        </View>
        <Pressable
          style={{
            backgroundColor: "#003580",
            width: 120,
            padding: 3,
            borderRadius: 5,
            marginLeft: "auto",
            marginVertical: 7,
          }}
        >
          <Text
            style={{ color: "white", textAlign: "center" }}
            onPress={handleConfirmation}
          >
            Book Now
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ConfirmationScreen;
