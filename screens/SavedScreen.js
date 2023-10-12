import React from "react";
import { View, Text, FlatList, Image, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { Dimensions } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const SavedScreen = () => {
  const savedData = useSelector((state) => state?.favBooking);
  const { width, height } = Dimensions.get("window");

  savedData.length > 0 && console.log(savedData);

  return (
    <FlatList
      data={savedData}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            style={{
              backgroundColor: "white",
              margin: 10,
              flexDirection: "row-reverse",
              height: index === 2 ? 250 : "",
              marginBottom: index === 2 ? 20 : "",
            }}
          >
            <Image
              style={{ width: width - 240, height: height - 560 }}
              source={{ uri: item?.image }}
            />
            <View style={{ padding: 10 }}>
              <View style={{ flexDirection: "row-reverse" }}>
                <Text style={{ width: 170, fontSize: 15, fontWeight: "bold" }}>
                  {item?.name?.length > 20
                    ? item.name.substr(0, 20)
                    : item?.name}
                </Text>
                <AntDesign
                  name="heart"
                  size={24}
                  color="red"
                  onPress={() => unFavBooking(index)}
                />
              </View>

              <View
                style={{
                  flexDirection: "row-reverse",
                  gap: 20,
                  marginTop: 5,
                }}
              >
                <MaterialIcons name="stars" size={24} color="black" />
                <Text>{item.rating}</Text>
                <Text
                  style={{
                    backgroundColor: "#6cb4EE",
                    color: "white",
                    paddingVertical: 5,
                    paddingHorizontal: 5,
                    borderRadius: 6,
                  }}
                >
                  Genius Level
                </Text>
              </View>
              <Text style={{ width: 210, marginTop: 5, color: "gray" }}>
                {item?.address?.length > 40
                  ? item?.address.substr(0, 40) + "..."
                  : item?.address}
              </Text>
              <View
                style={{
                  flexDirection: "row-reverse",
                  gap: 20,
                  marginTop: 5,
                }}
              >
                <Text
                  style={{
                    color: "red",
                    textDecorationLine: "line-through",
                    fontSize: 15,
                  }}
                >
                  Rs{item.oldPrice}
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  Rs{item.newPrice}
                </Text>
              </View>
              <View>
                <Text style={{ color: "gray" }}>Delux Room</Text>
                <Text style={{ color: "gray" }}>Hotel Room: 1 bed</Text>
              </View>
              <Text
                style={{
                  color: "white",
                  backgroundColor: "#608286",
                  textAlign: "center",
                  width: 140,
                  marginLeft: "auto",
                  marginTop: 10,
                  borderRadius: 6,
                }}
              >
                Limited Time Free
              </Text>
            </View>
          </Pressable>
        );
      }}
    />
  );
};

export default SavedScreen;
