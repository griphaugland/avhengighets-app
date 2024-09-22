import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import PencilIcon from "../components/icons/PencilIcon";
import SmokeIcon from "../components/icons/SmokeIcon";
import SnusIcon from "../components/icons/SnusIcon";
import GamblingIcon from "../components/icons/GamblingIcon";
import DrugsIcon from "../components/icons/DrugsIcon";
import AlcoholIcon from "../components/icons/AlcoholIcon";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../style/styles";

export default function SetUpScreen({ navigation }) {
  const [addictionType, setAddictionType] = useState("");
  const [customAddictionName, setCustomAddictionName] = useState(""); // State for custom addiction name
  const [monthlyAmount, setMonthlyAmount] = useState("");
  const [yearlyAmount, setYearlyAmount] = useState(0);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Snus", value: "Snus", icon: () => <SnusIcon /> },
    { label: "Røyk", value: "Røyk", icon: () => <SmokeIcon /> },
    { label: "Pengespill", value: "Pengespill", icon: () => <GamblingIcon /> },
    { label: "Rusmidler", value: "Rusmidler", icon: () => <DrugsIcon /> },
    { label: "Alkohol", value: "Alkohol", icon: () => <AlcoholIcon /> },
    { label: "Egendefinert", value: "Egendefinert", icon: () => <PencilIcon /> },
  ]);

  const addAddictionItem = async () => {
    const yearlyCost = monthlyAmount * 12;
    const newItem = {
      type: addictionType === "Egendefinert" ? customAddictionName : addictionType,
      monthlyAmount,
      yearlyAmount: yearlyCost,
    };
    await storeAddictionItem(newItem);
    setYearlyAmount(yearlyCost);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>Sett opp</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Hva sliter du med?</Text>
      <DropDownPicker
        open={open}
        value={addictionType}
        items={items}
        setOpen={setOpen}
        setValue={setAddictionType}
        setItems={setItems}
        style={pickerSelectStyles}
        placeholder="Velg din avhengighet"
        dropDownContainerStyle={styles.dropdownContainer}
        zIndex={1000}
      />

      {/* Conditional Input Field for Custom Addiction Name */}
      {addictionType === "Egendefinert" && (
        <View style={styles.customInputContainer}>
          <Text style={styles.label}>Skriv inn navnet på avhengigheten</Text>
          <TextInput
            style={styles.input}
            placeholder="Egendefinert navn"
            value={customAddictionName}
            onChangeText={setCustomAddictionName}
          />
        </View>
      )}

      <Text style={styles.label}>Hvor mye bruker du på dette i måneden?</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="0"
        value={monthlyAmount}
        onChangeText={setMonthlyAmount}
      />

      <Text style={styles.result}>
        I løpet av ett år bruker du {monthlyAmount ? monthlyAmount * 12 : 0} kr
      </Text>

      <Button title="Lagre Avhengighet" onPress={addAddictionItem} />
    </SafeAreaView>
  );
}

const pickerSelectStyles = {
  borderColor: "#ccc",
  borderWidth: 1,
  marginBottom: 20,
  paddingHorizontal: 10,
  height: 40,
};