// import {
//   View,
//   Text,
//   SafeAreaView,
//   TextInput,
//   Pressable,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import React from "react";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import Entypo from "@expo/vector-icons/Entypo";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";

// export default function Profile() {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View
//         style={{
//           flex: 1,
//           flexDirection: "column-reverse",
//           justifyContent: "stretch",
//           alignItems: "center",
//         }}
//       >
//         <View
//           style={{
//             width: "100%",
//             height: "97%",
//             backgroundColor: "white",
//             borderTopRightRadius: 20,
//             borderTopLeftRadius: 20,
//           }}
//         >
//           <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "space-between",
//               padding: 16,
//             }}
//           >
//             <Pressable>
//               <AntDesign name="questioncircleo" size={24} color="black" />
//             </Pressable>
//             <Pressable>
//               <AntDesign name="close" size={24} color="black" />
//             </Pressable>
//           </View>

//           <View>
//             <ScrollView style={{ flexDirection: "column" }}>
//               <View
//                 style={{
//                   flexDirection: "row",
//                   alignItems: "center",
//                   width: "100%",
//                   justifyContent: "center",
//                   marginBottom: 40,
//                   marginTop: 20,
//                 }}
//               >
//                 <Text style={{ fontSize: 23, fontWeight: "bold" }}>
//                   Log in to TikTok
//                 </Text>
//               </View>
//               <View style={{ flexDirection: "column", gap: 20 }}>
//                 <View
//                   style={{
//                     width: "100%",
//                     alignItems: "center",
//                     gap: 10,
//                   }}
//                 >
//                   <TextInput
//                     placeholder="Enter your email  /  phone number"
//                     style={styles.InputContainner}
//                     placeholderTextColor="black"
//                   />
//                   <TextInput
//                     placeholder="Enter your password"
//                     style={styles.InputContainner}
//                     placeholderTextColor="black"
//                   />

//                   <TouchableOpacity
//                     style={[
//                       styles.InputContainner,
//                       {
//                         backgroundColor: "red",
//                         alignItems: "center",
//                         justifyContent: "center",
//                       },
//                     ]}
//                   >
//                     <Text
//                       style={{
//                         color: "white",
//                         fontSize: 20,
//                         fontWeight: "bold",
//                       }}
//                     >
//                       Log in
//                     </Text>
//                   </TouchableOpacity>
//                   <View
//                     style={{
//                       flexDirection: "row",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <Text
//                       style={{
//                         textAlign: "center",
//                         fontSize: 12,
//                         color: "gray",
//                       }}
//                     >
//                       your number may be used to connect you with other, improve
//                       ads, and more, depending on your settings.
//                     </Text>
//                   </View>
//                 </View>

//                 {/* Horizontal Line with "or" in the center */}
//                 <View style={styles.lineContainer}>
//                   <View style={styles.line} />
//                   <Text style={styles.orText}>or</Text>
//                   <View style={styles.line} />
//                 </View>

//                 <View
//                   style={{
//                     flexDirection: "column",
//                     alignItems: "center",
//                     gap: 10,
//                   }}
//                 >
//                   <TouchableOpacity
//                     style={[
//                       styles.InputContainner,
//                       { flexDirection: "row", gap: 10 },
//                     ]}
//                   >
//                     <View>
//                       <Entypo
//                         name="facebook-with-circle"
//                         size={24}
//                         color="black"
//                       />
//                     </View>
//                     <Text>Continue With Facebook</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     style={[
//                       styles.InputContainner,
//                       { flexDirection: "row", gap: 10 },
//                     ]}
//                   >
//                     <View>
//                       <MaterialIcons name="email" size={24} color="black" />
//                     </View>
//                     <Text>Continue With Email</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     style={[
//                       styles.InputContainner,
//                       { flexDirection: "row", gap: 10 },
//                     ]}
//                   >
//                     <View>
//                       <AntDesign name="google" size={24} color="black" />
//                     </View>
//                     <Text>Continue With Google</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </ScrollView>
//           </View>
//           <View>
//             <View>
//               <Text>
//                 By continuing With an account Located in Nepal, You agree to our
//                 Terms of Service and acknowledge that you have read our Privacy
//                 Policy
//               </Text>
//             </View>
//             <View>
//               <Text>Alredy have an account? Login</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   InputContainner: {
//     borderWidth: 1,
//     borderColor: "#bfbfbf",
//     padding: 10,
//     borderRadius: 5,
//     width: "80%",
//   },
//   lineContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     marginVertical: 2,
//   },
//   line: {
//     height: 1,
//     backgroundColor: "gray",
//     flex: 1,
//   },
//   orText: {
//     marginHorizontal: 10,
//     fontSize: 16,
//     color: "gray",
//   },
// });

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Profile() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "column-reverse",
          justifyContent: "stretch",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "97%",
            backgroundColor: "white",
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}
        >
          <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 16,
              }}
            >
              <Pressable>
                <AntDesign name="questioncircleo" size={24} color="black" />
              </Pressable>
              <Pressable>
                <AntDesign name="close" size={24} color="black" />
              </Pressable>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                justifyContent: "center",
                marginBottom: 40,
                marginTop: 20,
              }}
            >
              <Text style={{ fontSize: 23, fontWeight: "bold" }}>
                Log in to TikTok
              </Text>
            </View>

            <View style={{ flexDirection: "column", gap: 20 }}>
              <View
                style={{
                  width: "100%",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <TextInput
                  placeholder="Enter your email  /  phone number"
                  style={styles.InputContainner}
                  placeholderTextColor="black"
                />
                <TextInput
                  placeholder="Enter your password"
                  style={styles.InputContainner}
                  placeholderTextColor="black"
                />

                <TouchableOpacity
                  style={[
                    styles.InputContainner,
                    {
                      backgroundColor: "red",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    Log in
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 12,
                      color: "gray",
                    }}
                  >
                    Your number may be used to connect you with others, improve
                    ads, and more, depending on your settings.
                  </Text>
                </View>
              </View>

              {/* Horizontal Line with "or" in the center */}
              <View style={styles.lineContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>or</Text>
                <View style={styles.line} />
              </View>

              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <TouchableOpacity
                  style={[
                    styles.InputContainner,
                    { flexDirection: "row", gap: 10 },
                  ]}
                >
                  <View>
                    <Entypo
                      name="facebook-with-circle"
                      size={24}
                      color="black"
                    />
                  </View>
                  <Text>Continue With Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.InputContainner,
                    { flexDirection: "row", gap: 10 },
                  ]}
                >
                  <View>
                    <MaterialIcons name="email" size={24} color="black" />
                  </View>
                  <Text>Continue With Email</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.InputContainner,
                    { flexDirection: "row", gap: 10 },
                  ]}
                >
                  <View>
                    <AntDesign name="google" size={24} color="black" />
                  </View>
                  <Text>Continue With Google</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

          {/* Fixed Footer Section */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              By continuing with an account located in Nepal, you agree to our
              Terms of Service and acknowledge that you have read our Privacy
              Policy.
            </Text>
            <TouchableOpacity>
              <Text style={styles.footerLink}>
                Already have an account? Log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  InputContainner: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    width: "80%",
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  line: {
    height: 1,
    backgroundColor: "gray",
    flex: 1,
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "gray",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  footerText: {
    fontSize: 12,
    color: "gray",
    textAlign: "center",
    marginBottom: 10,
  },
  footerLink: {
    fontSize: 14,
    color: "blue",
    textAlign: "center",
  },
});
