import React, { useState } from "react";
import { View, Text, Pressable, TextInput, Button, Alert } from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import HomeStyle from "../../style/HomeStyle";
import DatePicker from "@react-native-community/datetimepicker";
import { BottomModal, ModalContent, ModalTitle } from "react-native-modals";
import { useNavigation, useRoute } from "@react-navigation/native";

const HomeForm = () => {
  const [valueDate, setValueDate] = useState();
  const [statusDate, setStatusDate] = useState(false);
  const [showModule, setShowModule] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [Children, setChildren] = useState(0);
  const navigator = useNavigation();
  const route = useRoute();

  const handleSearch = () => {
    navigator.navigate("Search");
  };

  const handleShowDate = () => {
    setStatusDate(!statusDate);
  };

  const handleChangeDate = ({ type }, valueDate) => {
    setStatusDate(false);
    type === "set" && setValueDate(valueDate);
  };

  const handleModule = () => {
    setShowModule(!showModule);
  };

  const handleBtnSearch = () => {
    if (route?.params?.place && valueDate) {
      navigator.navigate("Place", {
        placeName: route.params.place,
        index: route.params.index,
        adults: adults,
        children: Children,
        rooms: rooms,
        valueDate,
      });
    } else {
      Alert.alert(
        "It wasn't perfect",
        "The location must be selected and the date determined",
        [
          {
            text: "close",
            style: "cancel",
          },
        ]
      );
    }
  };

  return (
    <View style={HomeStyle.formHome}>
      <Pressable style={HomeStyle.inputDestination} onPress={handleSearch}>
        <TextInput
          style={{ width: "90%" }}
          placeholder={
            route?.params?.place
              ? route?.params?.place
              : "Enter your destination"
          }
          editable={false}
        />
        <Feather
          style={{ paddingRight: 10 }}
          name="search"
          size={24}
          color="black"
        />
      </Pressable>
      <Pressable style={HomeStyle.inputDestination} onPress={handleShowDate}>
        <Pressable>
          <TextInput value={valueDate?.toDateString()} editable={false} />
        </Pressable>
        {statusDate && (
          <DatePicker
            mode="date"
            placeholderText="Enter Date"
            value={valueDate ? valueDate : new Date()}
            onChange={handleChangeDate}
          />
        )}
        <AntDesign
          style={{ paddingRight: 10 }}
          name="calendar"
          size={24}
          color="black"
        />
      </Pressable>
      <Pressable style={{ ...HomeStyle.inputDestination, marginBottom: 0 }}>
        <TextInput
          placeholder={`${rooms} room *  ${adults} adults * ${Children} children`}
          placeholderTextColor="red"
          editable={false}
        />
        <Ionicons
          onPress={() => handleModule()}
          style={{ paddingRight: 10 }}
          name="person-outline"
          size={24}
          color="black"
        />
      </Pressable>
      <Pressable>
        <Button onPress={handleBtnSearch} color="#003580" title="Search" />
      </Pressable>
      <BottomModal
        visible={showModule}
        onTouchOutside={() => handleModule()}
        modalTitle={
          <ModalTitle
            title="Select Rooms And Guests"
            textStyle={{ fontSize: 15, color: "white" }}
            style={{ backgroundColor: "#003580" }}
            align="right"
          />
        }
      >
        <View>
          <ModalContent>
            <View>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <Text>Rooms</Text>
                <View style={{ flexDirection: "row" }}>
                  <Pressable
                    style={{
                      backgroundColor: "#bebebe",
                      width: 26,
                      height: 26,
                      borderRadius: 13,
                    }}
                    onPress={() => rooms > 0 && setRooms(rooms - 1)}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 16,
                      }}
                    >
                      -
                    </Text>
                  </Pressable>
                  <Text
                    style={{
                      fontSize: 16,
                      marginHorizontal: 10,
                      fontWeight: "bold",
                    }}
                  >
                    {rooms}
                  </Text>
                  <Pressable
                    style={{
                      backgroundColor: "#bebebe",
                      width: 26,
                      height: 26,
                      borderRadius: 13,
                    }}
                    onPress={() => setRooms(rooms + 1)}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 16,
                      }}
                    >
                      +
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </ModalContent>
        </View>
        <View>
          <ModalContent>
            <View>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <Text>Adults</Text>
                <View style={{ flexDirection: "row" }}>
                  <Pressable
                    style={{
                      backgroundColor: "#bebebe",
                      width: 26,
                      height: 26,
                      borderRadius: 13,
                    }}
                    onPress={() => adults > 0 && setAdults(adults - 1)}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 16,
                      }}
                    >
                      -
                    </Text>
                  </Pressable>
                  <Text
                    style={{
                      fontSize: 16,
                      marginHorizontal: 10,
                      fontWeight: "bold",
                    }}
                  >
                    {adults}
                  </Text>
                  <Pressable
                    style={{
                      backgroundColor: "#bebebe",
                      width: 26,
                      height: 26,
                      borderRadius: 13,
                    }}
                    onPress={() => setAdults(adults + 1)}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 16,
                      }}
                    >
                      +
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </ModalContent>
        </View>
        <View>
          <ModalContent>
            <View>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <Text>Children</Text>
                <View style={{ flexDirection: "row" }}>
                  <Pressable
                    style={{
                      backgroundColor: "#bebebe",
                      width: 26,
                      height: 26,
                      borderRadius: 13,
                    }}
                    onPress={() => Children > 0 && setChildren(Children - 1)}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 16,
                      }}
                    >
                      -
                    </Text>
                  </Pressable>
                  <Text
                    style={{
                      fontSize: 16,
                      marginHorizontal: 10,
                      fontWeight: "bold",
                    }}
                  >
                    {Children}
                  </Text>
                  <Pressable
                    style={{
                      backgroundColor: "#bebebe",
                      width: 26,
                      height: 26,
                      borderRadius: 13,
                    }}
                    onPress={() => setChildren(Children + 1)}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 16,
                      }}
                    >
                      +
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </ModalContent>
          <Button
            color="#003580"
            title="Close"
            onPress={() => setShowModule(false)}
          />
        </View>
      </BottomModal>
    </View>
  );
};

export default HomeForm;
