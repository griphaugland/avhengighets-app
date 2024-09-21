import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Animated, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

export default function Navigation({ closeNav, navigation }) {
  // Animated value for side slide-in effect
  const slideAnim = useRef(new Animated.Value(-screenWidth)).current;

  useEffect(() => {
    // Slide in the overlay when the component mounts
    Animated.timing(slideAnim, {
      toValue: 0, // Slide to 0, the initial position
      duration: 300, // Duration of the animation in milliseconds
      useNativeDriver: true, // Use native driver for smoother animations
    }).start();
  }, []);

  const closeNavigation = () => {
    // Slide out the overlay before closing it
    Animated.timing(slideAnim, {
      toValue: -screenWidth, // Slide back off-screen
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      closeNav(); // Call the closeNav function after the animation completes
    });
  };

  return (
    <Animated.View style={[styles.overlay, { transform: [{ translateX: slideAnim }] }]}>
      <SafeAreaView style={styles.safeArea}>
        {/* Close Button */}
        <TouchableOpacity style={styles.closeButton} onPress={closeNavigation}>
          <Ionicons name="close" size={30} color="white" />
        </TouchableOpacity>

        {/* Navigation Content */}
        <View style={styles.navContent}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
            <Text style={styles.navText}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Logout")}>
            <Text style={styles.navText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#454545",
    zIndex: 1000,
    justifyContent: "flex-start",
  },
  safeArea: {
    flex: 1,
  },
  closeButton: {
    marginTop: 10,
    alignSelf: "flex-end",
    padding: 20,
  },
  navContent: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  navText: {
    fontSize: 24,
    color: "white",
    marginVertical: 10,
  },
});