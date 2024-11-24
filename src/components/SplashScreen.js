import React, { useEffect } from 'react'
import { View, Image } from 'react-native'
import styles from '../styles/SplashStyles'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login')
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigation])

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/splash.png')} style={styles.image} />
    </View>
  )
}

export default SplashScreen
