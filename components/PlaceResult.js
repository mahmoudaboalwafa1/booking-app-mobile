import React, { useLayoutEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { data } from "../data";
import { useNavigation } from "@react-navigation/native";

const PlaceResult = ({ place, setPlace }) => {
  const placeNew = place.trim();
  const [placeSelected, setPlaceSelected] = useState(null);
  const [changeDirectory, setChangeDirectory] = useState(false);
  const [Index, setIndex] = useState(0);
  const navigation = useNavigation();

  const handleSelectPlace = (index) => {
    setPlaceSelected(data[index].place);
    setChangeDirectory(true);
    setIndex(index);
  };

  useLayoutEffect(() => {
    changeDirectory &&
      navigation.navigate("Home", {
        place: placeSelected && placeSelected,
        index: Index,
        properties: data[Index].properties,
      });
  }, [changeDirectory]);

  return (
    <View style={{ marginTop: 20 }}>
      {data.map(
        (placeData, index) =>
          placeData.place.toLowerCase().includes(placeNew.toLowerCase()) && (
            <Pressable
              onPress={() => handleSelectPlace(index)}
              key={placeData.id}
              style={{
                flexDirection: "row-reverse",
                marginBottom: 10,
              }}
            >
              <Image
                style={{ width: 70, height: 70, marginLeft: 20 }}
                source={{ uri: placeData.placeImage }}
              />
              <View>
                <Text style={{ fontWeight: "500", fontSize: 15 }}>
                  {placeData.place}
                </Text>
                <Text style={{ marginVertical: 4 }}>
                  {placeData.shortDescription}
                </Text>
                <Text style={{ fontSize: 15, color: "gray" }}>
                  {placeData.properties.length} properties
                </Text>
              </View>
            </Pressable>
          )
      )}
    </View>
  );
};

export default PlaceResult;
