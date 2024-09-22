import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../style/styles";

export default function HomeScreen({ navigation }) {
  const [addiction, setAddiction] = useState(null);

  useEffect(() => {
    // Fetch stored addiction items on component mount
    const fetchAddiction = async () => {
      const storedAddiction = await getAddictionItem();
      setAddiction(storedAddiction);
    };
    fetchAddiction();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>Hjem</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Display the stored addiction details */}
      {addiction && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Lagret avhengighet:</Text>
          <Text>Type: {addiction.type}</Text>
          <Text>Beløp per måned: {addiction.monthlyAmount} kr</Text>
          <Text>Årlig beløp: {addiction.yearlyAmount} kr</Text>
        </View>
      )}

      <Button
        title="Gå til Oppsett"
        onPress={() => navigation.navigate("SetUp")}
      />
    </SafeAreaView>
  );
}