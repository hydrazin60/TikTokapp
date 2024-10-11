import React, { useEffect, useRef } from "react";
import {
  View,
  Image,
  Dimensions,
  StatusBar,
  Text,
  Pressable,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";

export default function Home() {
  const { width, height } = Dimensions.get("window");

  const rotateValue = useRef(new Animated.Value(0)).current;

 

  useEffect(() => {
    const startRotation = () => {
      Animated.loop(
        Animated.timing(rotateValue, {
          toValue: 1,  
          duration: 2000, 
          useNativeDriver: true,  
          easing: Easing.linear,  
        })
      ).start();  
    };
    startRotation();  
  
    return () => rotateValue.stopAnimation();  
  }, [rotateValue]);
  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],  
  });
  

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
      <View
        style={{
          position: "absolute",
          right: 0,
          bottom: 10,
          height: "70%",
          width: "20%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          style={{
            position: "relative",
            height: 40,
            width: 40,
            borderRadius: 25,
            borderColor: "white",
            borderWidth: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ zIndex: -1, bottom: 0, right: 0 }}>
            <MaterialCommunityIcons
              name="face-man-profile"
              size={41}
              color="black"
              style={{ height: "100%", width: "100%", marginBottom: 3 }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              right: 8,
              bottom: -10,
              zIndex: 1,
              width: 20,
              height: 20,
              borderRadius: 25,
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="plus" size={17} color="white" />
          </View>
        </Pressable>
        <Pressable style={styles.PressableIcons}>
          <Ionicons name="heart-outline" size={33} color="white" />
          <Text style={styles.PressableText}>22k</Text>
        </Pressable>
        <Pressable style={styles.PressableIcons}>
          <FontAwesome5 name="comment-dots" size={33} color="white" />
          <Text style={styles.PressableText}>5</Text>
        </Pressable>
        <Pressable style={styles.PressableIcons}>
          <Feather name="bookmark" size={30} color="white" />
          <Text style={styles.PressableText}> 99</Text>
        </Pressable>
        <Pressable style={styles.PressableIcons}>
          <Fontisto name="share-a" size={22} color="white" />
          <Text style={[styles.PressableText, { marginTop: 3 }]}>36</Text>
        </Pressable>

        {/* Animated View for rotating the music icon */}
        <Animated.View style={{ transform: [{ rotate }] }}>
          <MaterialCommunityIcons
            name="music-circle-outline"
            size={37}
            color="white"
          />
        </Animated.View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 12,
          width: "100%",
          zIndex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "column", gap: 10 }}>
            <View>
              <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>
                Jiban Pandey
              </Text>
            </View>
            <View>
              <Text style={{ color: "white", fontSize: 15 }}>
                hello world i am jiban
              </Text>
              <Text style={{ color: "white", fontSize: 13 }}>
                @yaklopan song ..more
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  PressableIcons: {
    flexDirection: "column",
    alignItems: "center",
    gap: 0,
  },
  PressableText: {
    color: "white",
    fontSize: 12,
  },
});

// import {
//   View,
//   Image,
//   Dimensions,
//   StatusBar,
//   Text,
//   Pressable,
//   StyleSheet,
//   Animated,
// } from "react-native";
// import React from "react";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
// import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
// import Feather from "@expo/vector-icons/Feather";
// import Fontisto from "@expo/vector-icons/Fontisto";

// export default function Home() {

//   const { width, height } = Dimensions.get("window");

//   return (
//     <View style={{ flex: 1 }}>
//       <StatusBar
//         barStyle="dark-content"
//         backgroundColor="transparent"
//         translucent
//       />
//       <Image
//         source={{
//           uri: "https://img.freepik.com/free-photo/photorealistic-view-tree-nature-with-branches-trunk_23-2151478040.jpg?t=st=1728486866~exp=1728490466~hmac=119d3608ffadc6968ac3152eb74e746b0746ea31c1122bbdfbcb21cea0b7270e&w=360",
//         }}
//         style={{
//           height: height,
//           width: width,
//           position: "absolute",
//           zIndex: -1,
//         }}
//       />
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           padding: 12,
//           alignItems: "center",
//           zIndex: 1,
//         }}
//       >
//         <View
//           style={{
//             flexDirection: "row",
//             flex: 1,
//             justifyContent: "space-evenly",
//           }}
//         >
//           <Pressable>
//             <Text style={{ color: "white", fontSize: 15, fontWeight: "600" }}>
//               Following
//             </Text>
//           </Pressable>
//           <Pressable>
//             <Text style={{ color: "white", fontSize: 15, fontWeight: "600" }}>
//               For You
//             </Text>
//           </Pressable>
//         </View>
//         <Pressable>
//           <Ionicons name="search" size={26} color="white" />
//         </Pressable>
//       </View>
//       <View
//         style={{
//           position: "absolute",
//           right: 0,
//           bottom: 10,
//           height: "70%",
//           width: "20%",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <Pressable
//           style={{
//             position: "relative",
//             height: 40,
//             width: 40,
//             borderRadius: 25,
//             borderColor: "white",
//             borderWidth: 1,
//             flexDirection: "row",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <View style={{ zIndex: -1, bottom: 0, right: 0 }}>
//             <MaterialCommunityIcons
//               name="face-man-profile"
//               size={41}
//               color="black"
//               style={{ height: "100%", width: "100%", marginBottom: 3 }}
//             />
//           </View>
//           <View
//             style={{
//               position: "absolute",
//               right: 8,
//               bottom: -10,
//               zIndex: 1,
//               width: 20,
//               height: 20,
//               borderRadius: 25,
//               backgroundColor: "red",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <FontAwesome5 name="plus" size={17} color="white" />
//           </View>
//         </Pressable>
//         <Pressable style={styles.PressableIcons}>
//           <Ionicons name="heart-outline" size={33} color="white" />
//           <Text style={styles.PressableText}>22k</Text>
//         </Pressable>
//         <Pressable style={styles.PressableIcons}>
//           <FontAwesome5 name="comment-dots" size={33} color="white" />
//           <Text style={styles.PressableText}>5</Text>
//         </Pressable>
//         <Pressable style={styles.PressableIcons}>
//           <Feather name="bookmark" size={30} color="white" />
//           <Text style={styles.PressableText}> 99</Text>
//         </Pressable>
//         <Pressable style={styles.PressableIcons}>
//           <Fontisto name="share-a" size={22} color="white" />
//           <Text style={[styles.PressableText, { marginTop: 3 }]}>36</Text>
//         </Pressable>
//         <Animated.View  style={{ transform: [{ rotate: `360deg`  }] }}>
//           <MaterialCommunityIcons
//             name="music-circle-outline"
//             size={37}
//             color="white"
//           />
//         </Animated.View>
//       </View>
//       <View
//         style={{
//           position: "absolute",
//           bottom: 0,
//           flexDirection: "row",
//           justifyContent: "space-between",
//           padding: 12,
//           width: "100%",
//           zIndex: 1,
//         }}
//       >
//         <View
//           style={{
//             flexDirection: "row",
//             width: "100%",
//             justifyContent: "space-between",
//           }}
//         >
//           <View style={{ flexDirection: "column", gap: 10 }}>
//             <View>
//               <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>
//                 Jiban Pandey
//               </Text>
//             </View>
//             <View>
//               <Text style={{ color: "white", fontSize: 15 }}>
//                 hello world i am jiban
//               </Text>
//               <Text style={{ color: "white", fontSize: 13 }}>
//                 @yaklopan song ..more
//               </Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   PressableIcons: {
//     flexDirection: "column",
//     alignItems: "center",
//     gap: 0,
//   },
//   PressableText: {
//     color: "white",
//     fontSize: 12,
//   },
// });
