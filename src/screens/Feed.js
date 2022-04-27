import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Button, Image, View } from 'react-native';
import SecondBackground from '../components/SecondBackground'
import HeaderLogo from '../components/HeaderLogo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
// import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'
import InfiniteScroll from 'react-infinite-scroll-component' 
import FeedPic from '../components/FeedPic'

export default function Feed() {

  return (
    <SecondBackground>
      <HeaderLogo />
      <Header>Foodies Feed</Header>
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
  )
}

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

