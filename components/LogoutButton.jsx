import React from 'react';
import { Button, Alert } from 'react-native';
import { supabase } from '../utils/supabase'; // Adjust the path as necessary

const LogoutButton = ({ navigation }) => {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert('Error logging out:', error.message);
    } else {
      // Navigate to the login screen or handle post-logout actions
      navigation.navigate('LogIn'); // Adjust according to your screen name
    }
  };

  return <Button title="Logout" onPress={handleLogout} />;
};

export default LogoutButton;