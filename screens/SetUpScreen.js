// src/screens/ContactScreen.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native"; // Use TouchableOpacity from react-native
import { SafeAreaView } from "react-native-safe-area-context"; // Import SafeAreaView correctly
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for the menu icon
import { styles } from "../style/styles"; // Ensure this path is correct and styles are exported properly

export default function SetUpScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container }>
      {/* Header with Menu Icon */}
      <View style={styles.header}>
        <Text style={styles.heading}>Sett opp</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <Text>Set up Screen</Text>
    </SafeAreaView>
  );
}