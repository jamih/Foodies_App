import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function HeaderLogo() {
  return <Image source={require('../assets/logo.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 75,
    position: 'absolute',
    top: 45,
    
  },
})