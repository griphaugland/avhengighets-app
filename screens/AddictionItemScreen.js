// src/screens/AddictionItemScreen.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../style/styles";

export default function AddictionItemScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container }>
       <View style={styles.header}>
        <Text style={styles.heading}>Lagrede datoer</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <Text>Addiction Item Screen</Text>
    </SafeAreaView>
  );
}
