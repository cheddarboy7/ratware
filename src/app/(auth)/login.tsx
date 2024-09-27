import React, { useState } from 'react'
import { Alert, StyleSheet, View, AppState, Image, TouchableOpacity, Text, TextInput, ImageBackground, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
import { supabase } from '../../lib/supabase'
import Entypo from '@expo/vector-icons/Entypo';
import { pinky } from '../_layout';

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

const size = 30;
const color = "white";


export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }

  return (  
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >    
      <ImageBackground 
      source={require('../../../assets/background.jpg')}
      style={styles.imagebg} 
      resizeMode='cover'
      >
      
      <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss(); 
      }}>
      
      <View style={styles.container}>
      <Image 
        source={require('../../../assets/kuromi.gif')} 
        style={{width: 300, height: 300, }} 
      />

      <View style={styles.inputContainer}>
        <View style={styles.logoContainer}>
          <Entypo name="mail" size={size} color={color} style={styles.logo} />  
            <TextInput 
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="missashley@cutie.com"
            />
        </View>
        <View style={styles.logoContainer}>
          <Entypo name="key" size={size} color={color} style={styles.logo} />
          <TextInput 
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="input password here !!!"
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} disabled={loading} onPress={() => signInWithEmail()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} disabled={loading} onPress={() => signUpWithEmail()}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex : 1 }} />  
    </View> 
    </TouchableWithoutFeedback>
    </ImageBackground>
    </KeyboardAvoidingView>
    
  )
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  logo:{
    paddingHorizontal: 15,
    marginTop: 26,
  },
  logoContainer:{
    flexDirection: 'row',
  },
  imagebg:{
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  button: {
    backgroundColor: pinky,  
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 3,               
    shadowColor: '#000',        // Shadow
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginHorizontal: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Dosis-Regular',
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonContainer:{
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Dosis-Regular',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: pinky,
    borderRadius: 20,
    backgroundColor: 'rgba(54, 52, 52, 0.5)',
    marginVertical: 12,
  },
  inputContainer:{
    padding: 25,
  }
})