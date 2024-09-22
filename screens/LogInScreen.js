// src/screens/AddictionItemScreen.js
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../style/styles";
import React, { useState } from 'react'
import { TextInput, Text, View, AppState } from 'react-native'
import { supabase } from '../utils/supabase'
import { Button, Input } from '@rneui/themed'
import { TouchableOpacity } from 'react-native-gesture-handler'

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

export default function LogIn({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [error, setError] = useState('')

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if(error){
      setError(error.message)
    }
    if(!session) {
      setFeedback('Please check your inbox for email verification!')
    }
    setLoading(false)
    setFeedback('')
  }


  return (
    <SafeAreaView style={styles.centerContainer}>
      <View style={styles.header}>
        <Text style={styles.heading}>Logg inn</Text>
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TextInput
          label="Email"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Email Address"
          autoCapitalize={'none'}
        />
      </View>
      <View style={styles.verticallySpaced}>
      <TextInput
          label="Password"
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
      </View>
      <View style={[styles.verticallySpaced]}>
      <TouchableOpacity style={styles.button} title="Logg inn"  disabled={loading} onPress={() => signInWithEmail()}>
          <Text style={styles.buttonText}>Logg inn</Text>
        </TouchableOpacity>
        <Text style={styles.statusText}>
          {loading ? 'Loading ...' : ''}
          {error && !loading && 
            <Text style={styles.errorText}>{error}</Text>
          }
          {feedback !== "" && !loading && 
            <Text style={styles.successText}>{feedback}</Text>          
          }
        </Text>
      </View>

      <View>
        <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
          <Text style={styles.greyFont}>Har du ingen bruker? Registrer deg her</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
