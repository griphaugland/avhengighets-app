import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { supabase } from './utils/supabase'
import Auth from './components/Auth'
import Account from './components/Account'
import { View } from 'react-native'
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/SetUpScreen';
import AddictionItemScreen from './screens/AddictionItemScreen';
import CustomDrawerContent from './components/CustomDrawerContent'; // Import your custom drawer content component


const Drawer = createDrawerNavigator();


export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  if(session && session.user) {
     return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />} // Use custom drawer content if needed
      >
       {/*  {session && session.user ? (<Account key={session.user.id} session={session} />) : <Auth />} */}
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
  } else {
    return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />} // Use custom drawer content if needed
      >
        <Drawer.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }} // Hide header if not needed
        />
       
      </Drawer.Navigator>
    </NavigationContainer>
  );
  }
 
  
}
