import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import SecondBackground from '../components/SecondBackground'
import HeaderLogo from '../components/HeaderLogo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'

import FeedPic from '../components/FeedPic'


export default function MapScreen() {
  return (
  <SecondBackground>
      <HeaderLogo />
      <Header>Map Screen</Header>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Paragraph style={styles.userText}>
        @byron
      </Paragraph>
      <FeedPic style={styles.pic}></FeedPic>

      <Paragraph style={styles.userText}>
        @jami
      </Paragraph>
      <FeedPic style={styles.pic}></FeedPic>
        </ScrollView>
      </SafeAreaView>
    </SecondBackground>
    
    
  ) }
    
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    top: 60,

    // width: 300,
    // height: 200
  },
  scrollView: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 0,
  },
  text: {
    fontSize: 30,
  },
  userText: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
  },
  pic: {
    width: 200,
    height: 600,
    padding: 30,
  }


});

