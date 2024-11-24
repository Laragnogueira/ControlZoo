import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useFonts } from 'expo-font'
import {  Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { LinearGradient } from 'expo-linear-gradient'
import styles from '../styles/LoginStyles' 

const LoginScreen = ({ navigation })  => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  })

  const handleLogin = () => {
    navigation.navigate('Home')
  }

  if (!fontsLoaded) {
    return <Text>Carregando fonte...</Text>
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={['#88CBCB', '#C1DCDC']}
        style={styles.gradient}
      />
      <Text style={styles.welcomeText}>Bem-vindo ao ControlZoo!</Text>

      <TextInput
        style={[styles.input, { fontFamily: 'Poppins_400Regular' }]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.input, { fontFamily: 'Poppins_400Regular' }]}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default LoginScreen
