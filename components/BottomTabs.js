import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import NavigationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SavedScreen from "../screens/SavedScreen";

const TabsBottom = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <TabsBottom.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: "Booking.com",
        headerTitleStyle: {
          fontWeight: "bold",
          color: "white",
        },
        headerStyle: {
          backgroundColor: "#003580",
          shadowColor: "transparent",
        },
        headerTitleAlign: "center",
      }}
    >
      <TabsBottom.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Ionicons name="person" size={24} color="#003580" />
            ) : (
              <Ionicons name="person-outline" size={24} color="black" />
            );
          },
        }}
      />
      <TabsBottom.Screen
        name="Notification"
        component={NavigationScreen}
        options={{
          tabBarLabel: "Notification",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Ionicons name="notifications-sharp" size={24} color="#003580" />
            ) : (
              <Ionicons name="notifications-outline" size={24} color="black" />
            );
          },
        }}
      />
      <TabsBottom.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarLabel: "Saved",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <AntDesign name="heart" size={24} color="#003580" />
            ) : (
              <AntDesign name="hearto" size={24} color="black" />
            );
          },
        }}
      />
      <TabsBottom.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Entypo name="home" size={24} color="#003580" />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            );
          },
        }}
      />
    </TabsBottom.Navigator>
  );
};

export default BottomTabs;
