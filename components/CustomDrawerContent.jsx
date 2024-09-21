import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Contact')}>
          <Text style={styles.navText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('AddictionItem')}>
          <Text style={styles.navText}>Addiction Item</Text>
        </TouchableOpacity>
        {/* Add more items here as needed */}
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 16,
  },
  navText: {
    fontSize: 18,
    marginVertical: 8,
    color: 'black',
  },
});