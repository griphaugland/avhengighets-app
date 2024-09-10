import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { storeAddictionItem, getAddictionItem } from "../services/storage";

export default function HomeScreen({ navigation }) {
  const [addictionType, setAddictionType] = useState("");
  const [monthlyAmount, setMonthlyAmount] = useState("");
  const [yearlyAmount, setYearlyAmount] = useState(0);
  const [addiction, setAddiction] = useState(null);

  useEffect(() => {
    // Fetch stored addiction items on component mount
    const fetchAddiction = async () => {
      const storedAddiction = await getAddictionItem();
      setAddiction(storedAddiction);
    };
    fetchAddiction();
  }, []);

  const addAddictionItem = async () => {
    const yearlyCost = monthlyAmount * 12;
    const newItem = {
      type: addictionType,
      monthlyAmount,
      yearlyAmount: yearlyCost,
    };
    await storeAddictionItem(newItem);
    setAddiction(newItem);
    setYearlyAmount(yearlyCost);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sett opp</Text>

      <Text style={styles.label}>Hva sliter du med?</Text>
      <Picker
        selectedValue={addictionType}
        style={styles.input}
        onValueChange={(itemValue) => setAddictionType(itemValue)}
      >
        <Picker.Item label="Velg din avhengighet" value="" />
        <Picker.Item label="Snus" value="Snus" />
        <Picker.Item label="Røyk" value="Røyk" />
        <Picker.Item label="Pengespill" value="Pengespill" />
        <Picker.Item label="Rusmidler" value="Rusmidler" />
        <Picker.Item label="Alkohol" value="Alkohol" />
        <Picker.Item label="Annet" value="Annet" />
      </Picker>

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

      {addiction && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Lagret avhengighet:</Text>
          <Text>Type: {addiction.type}</Text>
          <Text>Beløp per måned: {addiction.monthlyAmount} kr</Text>
          <Text>Årlig beløp: {addiction.yearlyAmount} kr</Text>
        </View>
      )}

      <Button
        title="Gå til Kontakt"
        onPress={() => navigation.navigate("Contact")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 16,
    marginBottom: 20,
  },
  resultContainer: {
    marginTop: 20,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
