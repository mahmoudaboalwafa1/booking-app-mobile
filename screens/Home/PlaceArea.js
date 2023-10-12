import React, { useState } from "react";
import { View, Text, Image, Pressable, Dimensions } from "react-native";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  Octicons,
  Entypo,
} from "@expo/vector-icons";

import { data, filters } from "../../data";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList } from "react-native";
import {
  BottomModal,
  ModalButton,
  ModalFooter,
  ModalTitle,
} from "react-native-modals";
import { useDispatch, useSelector } from "react-redux";
import { addFav } from "../../reducer/actions";

const PlaceArea = () => {
  const route = useRoute();
  const { width, height } = Dimensions.get("window");
  const [sortFilter, setSortFilter] = useState(false);
  const [filter, setFilter] = useState("");
  const [fav, setFav] = useState([false, false, false]);
  const [sortedData, setSortedData] = useState(
    data[route.params.index].properties
  );
  const dispatch = useDispatch();

  const [favData, setFavData] = useState([]);
  const navigation = useNavigation();

  const compareLow = (a, b) => {
    if (a.newPrice < b.oldPrice) {
      return 1;
    } else if (a.newPrice > b.oldPrice) {
      return -1;
    }

    setSortFilter(false);
    return 0;
  };

  const handleFilterPress = (index) => {
    setFilter(filters[index].filter);
  };

  const compareHigh = (a, b) => {
    if (a.newPrice > b.oldPrice) {
      return 1;
    } else if (a.newPrice < b.oldPrice) {
      return -1;
    }

    setSortFilter(false);
    return 0;
  };

  const handleBtnApply = () => {
    switch (filter) {
      case "cost:Low to High":
        setSortedData(sortedData.sort(compareLow));
        break;
      case "cost:High to Low":
        setSortedData(sortedData.sort(compareHigh));
        break;
    }

    setSortFilter(false);
  };

  const showDataPlaceFn = (index) => {
    navigation.navigate("DataPlace", {
      properties: sortedData[index],
      adults: route.params.adults ? route.params.adults : 0,
      rooms: route.params.rooms ? route.params.rooms : 0,
      children: route.params.children ? route.params.children : 0,
      date: route.params.valueDate,
    });
  };

  const favBooking = (index, item) => {
    setFav(fav.map((lov, i) => (i === index ? !lov : lov)));
    setFavData([...favData, item]);
  };

  const unFavBooking = (index) => {
    setFav(fav.map((lov, i) => (i === index ? !lov : lov)));
  };

  favData.length > 0 && dispatch(addFav(favData));

  console.log(favData);

  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          paddingVertical: 5,
          paddingHorizontal: 10,
        }}
      >
        <Pressable
          style={{ flexDirection: "row-reverse", alignItems: "center", gap: 5 }}
          onPress={() => setSortFilter(!sortFilter)}
        >
          <Octicons name="arrow-switch" size={24} color="gray" />
          <Text style={{ color: "gray" }}>Sort</Text>
        </Pressable>
        <Pressable
          style={{ flexDirection: "row-reverse", alignItems: "center", gap: 5 }}
          onPress={() => setSortFilter(true)}
        >
          <Ionicons name="filter" size={24} color="gray" />
          <Text style={{ color: "gray" }}>Filter</Text>
        </Pressable>
        <Pressable
          style={{ flexDirection: "row-reverse", alignItems: "center", gap: 5 }}
          onPress={() =>
            navigation.navigate("Map", {
              properties: sortedData,
            })
          }
        >
          <FontAwesome name="map-marker" size={24} color="gray" />
          <Text style={{ color: "gray" }}>Map</Text>
        </Pressable>
      </View>
      <View>
        <View>
          <FlatList
            data={sortedData}
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
                  onPress={() => showDataPlaceFn(index)}
                >
                  <Image
                    style={{ width: width - 240, height: height - 560 }}
                    source={{ uri: item?.image }}
                  />
                  <View style={{ padding: 10 }}>
                    <View style={{ flexDirection: "row-reverse" }}>
                      <Text
                        style={{ width: 170, fontSize: 15, fontWeight: "bold" }}
                      >
                        {item?.name.length > 20
                          ? item.name.substr(0, 20)
                          : item?.name}
                      </Text>
                      {!fav[index] ? (
                        <AntDesign
                          name="hearto"
                          size={24}
                          color="red"
                          onPress={() => favBooking(index, item)}
                        />
                      ) : (
                        <AntDesign
                          name="heart"
                          size={24}
                          color="red"
                          onPress={() => unFavBooking(index)}
                        />
                      )}
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
                      {item.address.length > 40
                        ? item.address.substr(0, 40) + "..."
                        : item.address}
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
        </View>
      </View>

      <BottomModal
        visible={sortFilter}
        modalTitle={
          <ModalTitle
            title="Sort And Filter"
            style={{ backgroundColor: "#003580" }}
            textStyle={{ color: "white", fontSize: 15 }}
          />
        }
        onTouchOutside={() => setSortFilter(false)}
        onHardwareBackPress={() => setSortFilter(false)}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              textStyle={{ color: "black", fontSize: 15 }}
              onPress={handleBtnApply}
            />
          </ModalFooter>
        }
      >
        <View style={{ flexDirection: "row-reverse", paddingTop: 10 }}>
          <View
            style={{
              flex: 3,
              borderLeftColor: "black",
              borderLeftWidth: 1,
              paddingRight: 10,
            }}
          >
            <Text>Sort</Text>
          </View>
          <View style={{ flex: 4, marginRight: 20, paddingBottom: 20 }}>
            {filters.map((item, index) => (
              <Pressable
                key={index}
                style={{
                  flexDirection: "row-reverse",
                  alignItems: "center",
                }}
                onPress={() => handleFilterPress(index)}
              >
                {filter.includes(item.filter) ? (
                  <FontAwesome name="circle" size={15} color="#003580" />
                ) : (
                  <Entypo name="circle" size={14} color="black" />
                )}
                <Text
                  style={{ marginRight: 7, marginVertical: 5 }}
                  key={item.id}
                >
                  {item.filter}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </BottomModal>
    </>
  );
};

export default PlaceArea;
