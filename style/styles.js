import {StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "white",
      height: "100%",
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 10,
      backgroundColor: "white",
    },
    heading: {
      fontSize: 24,
      fontWeight: "bold",
    },
    label: {
      fontSize: 16,
      marginBottom: 10,
    },
    input: {
      height: 50,
      borderColor: "#ccc",
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
      borderRadius: 7.5,
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
    dropdownContainer: {
      borderColor: "#ccc",
      borderWidth: 1,
      height: 250,
    },
  });