import {StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "white",
      height: "100%",
    },
    centerContainer: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        paddingBottom: 100,
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
      height: 240,
      maxHeight: 310,
    },
    verticallySpaced: {
        paddingTop: 4,
        paddingBottom: 4,
        alignSelf: 'stretch',
      },
      mt20: {
        marginTop: 20,
      },
    greyFont: {
        marginTop: 20,
        color: "grey",
        fontSize: 16,
        fontWeight: "semi-bold",
    },
    errorText: {
        color: "red",
        fontSize: 16,
        fontWeight: "semi-bold",
    },
    successText: {
        color: "green",
        fontSize: 16,
        fontWeight: "semi-bold",
    },
    statusText: {
        marginTop: 20,
        color: "black",
        fontSize: 16,
        fontWeight: "semi-bold",
    },
    button: {
        padding: 10,
        backgroundColor: "#4883F6",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    }
  });