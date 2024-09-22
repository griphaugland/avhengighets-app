import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import LogoutButton from './LogoutButton';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.navText}>Hjem</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('SetUp')}>
          <Text style={styles.navText}>Sett opp ny</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('AddictionItem')}>
          <Text style={styles.navText}>Addiction Items</Text>
        </TouchableOpacity>
        {/* Add more items here as needed */}
        <LogoutButton navigation={props.navigation} />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 16,
    gap: 8,
  },
  navText: {
    fontSize: 18,
    marginVertical: 8,
    color: 'black',
  },
});