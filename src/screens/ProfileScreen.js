import React, { useEffect, useState } from 'react';
import {Button, StyleSheet, Text, View, Image } from 'react-native';  
import { logoutUser } from '../api/auth-api'
import HeaderLogo from '../components/HeaderLogo';


export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <HeaderLogo />
            <Image style={styles.pic} source={require('../assets/temp-profile.jpg')} />
            <Text style={styles.username}>@username</Text>
            <View style={styles.buttonContainer}>
            <Button onPress={logoutUser} title="Log Out" color="#FFFFFF" accessibilityLabel="Log Out"/>
            </View>
      </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      },
      buttonContainer: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#4C68D7',
        borderRadius: 3,
        padding: 2,
      },
      username: {
        fontSize: 15,
        top: 220,
      },
      pic: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 120,
      }
});