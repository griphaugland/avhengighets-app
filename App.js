import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import AddictionItemScreen from './screens/AddictionItemScreen';
import CustomDrawerContent from './components/CustomDrawerContent'; // Import your custom drawer content component

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />} // Use custom drawer content if needed
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Hide header if not needed
        />
        <Drawer.Screen
          name="Contact"
          component={ContactScreen}
          options={{ headerShown: false }} // Hide header if not needed
        />
        <Drawer.Screen
          name="AddictionItem"
          component={AddictionItemScreen}
          options={{ headerShown: false }} // Hide header if not needed
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}