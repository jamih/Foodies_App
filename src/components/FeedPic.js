import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function FeedPic() {
  return <Image source={require('../assets/nudpob.jpg')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 150,

  },
})

