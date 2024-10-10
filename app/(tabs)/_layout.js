import { View } from "react-native";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Ionicons name="home" size={size} color={color} />
            ) : (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: "Friends",
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Ionicons name="people" size={size} color={color} />
            ) : (
              <Ionicons name="people-outline" size={size} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="button"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <View>
              <View
                style={{
                  width: 29,
                  height: 29,
                  backgroundColor: "black",
                  borderRadius: 4,
                }}
              >
                <Ionicons
                  name="add-outline"
                  size={30}
                  color="white"
                  style={{}}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Ionicons name="chatbox" size={size} color={color} />
            ) : (
              <Ionicons name="chatbox-outline" size={size} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Ionicons name="person" size={size} color={color} />
            ) : (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
        }}
      />
    </Tabs>
  );
}
