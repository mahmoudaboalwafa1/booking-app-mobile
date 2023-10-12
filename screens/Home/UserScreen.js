import React, { useState, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, TextInput, Pressable, Alert } from "react-native";

const UserScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [userDetails, setUserDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });
  const { selectedRooms, adults, properties, children, rooms } = route.params;
  useLayoutEffect(() => {
    const unsub = navigation.setOptions({
      title: "User Details",
      headerStyle: { backgroundColor: "#003580" },
      headerTitleStyle: { color: "white" },
      headerTitleAlign: "center",
    });

    return unsub;
  }, []);

  const FinalStep = () => {
    if (
      userDetails.fName &&
      userDetails.lName &&
      userDetails.email &&
      userDetails.phone
    ) {
      navigation.navigate("Confirmation", {
        selectedRooms,
        adults,
        properties,
        children,
        rooms,
      });
    } else {
      !userDetails.fName
        ? Alert.alert(
            "Please enter data",
            "You forgot to fill in your first name",
            [{ text: "close", style: "cancel" }]
          )
        : !userDetails.lName
        ? Alert.alert(
            "Please enter data",
            "You forgot to fill in your last name",
            [{ text: "close", style: "cancel" }]
          )
        : !userDetails.email
        ? Alert.alert("Please enter data", "You forgot to fill in your email", [
            { text: "close", style: "cancel" },
          ])
        : !userDetails.phone
        ? Alert.alert(
            "Please enter data",
            "You forgot to fill in your phone number",
            [{ text: "close", style: "cancel" }]
          )
        : null;
    }
  };

  return (
    <View
      style={{
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View style={{ padding: 10 }}>
        <View>
          <Text style={{ paddingVertical: 10 }}>First Name</Text>
          <TextInput
            value={userDetails.fName}
            onChangeText={(text) =>
              setUserDetails({ ...userDetails, fName: text })
            }
            style={{
              borderWidth: 1,
              borderColor: "gray",
              padding: 5,
            }}
          />
        </View>
        <View>
          <Text style={{ paddingVertical: 10 }}>Last Name</Text>
          <TextInput
            value={userDetails.lName}
            onChangeText={(text) =>
              setUserDetails({ ...userDetails, lName: text })
            }
            style={{ borderWidth: 1, borderColor: "gray", padding: 5 }}
          />
        </View>
        <View>
          <Text style={{ paddingVertical: 10 }}>Email</Text>
          <TextInput
            onChangeText={(text) =>
              setUserDetails({ ...userDetails, email: text })
            }
            value={userDetails.email}
            style={{ borderWidth: 1, borderColor: "gray", padding: 5 }}
          />
        </View>
        <View>
          <Text style={{ paddingVertical: 10 }}>Phone No</Text>
          <TextInput
            onChangeText={(text) =>
              setUserDetails({ ...userDetails, phone: text })
            }
            value={userDetails.phone}
            style={{ borderWidth: 1, borderColor: "gray", padding: 5 }}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          padding: 10,
          position: "relative",
          bottom: 30,
        }}
      >
        <View>
          <View style={{ flexDirection: "row-reverse", gap: 10 }}>
            <Text
              style={{
                fontSize: 15,
                textDecorationLine: "line-through",
                color: "red",
              }}
            >
              {properties.oldPrice}
            </Text>
            <Text style={{ fontSize: 15 }}>Rs {properties.newPrice}</Text>
          </View>
          <Text>
            You Saved {properties.oldPrice - properties.newPrice} Rupes
          </Text>
        </View>

        <Pressable
          onPress={FinalStep}
          style={{ backgroundColor: "#0077ff", padding: 10, borderRadius: 5 }}
        >
          <Text style={{ color: "white", fontSize: 15 }}>Final Step</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserScreen;
