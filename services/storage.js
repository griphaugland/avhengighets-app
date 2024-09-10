// src/services/storage.js
import AsyncStorage from "@react-native-async-storage/async-storage";

// Save addiction item
export const storeAddictionItem = async (item) => {
  try {
    const jsonValue = JSON.stringify(item);
    await AsyncStorage.setItem("@addiction_item", jsonValue);
  } catch (e) {
    // saving error
    console.error(e);
  }
};

// Get addiction item
export const getAddictionItem = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@addiction_item");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.error(e);
  }
};
