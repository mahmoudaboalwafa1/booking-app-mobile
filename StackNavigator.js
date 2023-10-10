import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./components/BottomTabs";
import SearchScreen from "./screens/SearchScreen";
import PlaceArea from "./screens/Home/PlaceArea";
import MapScreen from "./screens/Home/MapScreen";
import DataPlace from "./screens/Home/DataPlace";
import RoomsScreen from "./screens/Home/RoomsScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Place"
          component={PlaceArea}
          options={{
            title: "Popular Places",
            headerTitleStyle: { color: "white" },
            headerStyle: { backgroundColor: "#003580" },
          }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="DataPlace" component={DataPlace} />
        <Stack.Screen name="Room" component={RoomsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
