import {
  View,
  Image,
  Dimensions,
  StatusBar,
  Text,
  Pressable,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Home() {
  const { width, height } = Dimensions.get("window");

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={{
          uri: "https://img.freepik.com/free-photo/photorealistic-view-tree-nature-with-branches-trunk_23-2151478040.jpg?t=st=1728486866~exp=1728490466~hmac=119d3608ffadc6968ac3152eb74e746b0746ea31c1122bbdfbcb21cea0b7270e&w=360",
        }}
        style={{
          height: height,
          width: width,
          position: "absolute",
          zIndex: -1,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 12,
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-evenly",
          }}
        >
          <Pressable>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "600" }}>
              Following
            </Text>
          </Pressable>
          <Pressable>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "600" }}>
              For You
            </Text>
          </Pressable>
        </View>
        <Pressable>
          <Ionicons name="search" size={26} color="white" />
        </Pressable>
      </View>
    </View>
  );
}
