import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'
import InfiniteScroll from 'react-infinite-scroll-component' 
import FeedPic from '../components/FeedPic'




export default function Feed() {
  return (
  <Background>
      <Logo />
      <Header>Foodies Feed</Header>
      <Paragraph>
        @byron
      </Paragraph>
      
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        
          <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <FeedPic></FeedPic>
        </ScrollView>
      </SafeAreaView>


    
      
      <Button mode="outlined" onPress={logoutUser}>
        Logout
      </Button>
    </Background>
    
  ) }
    
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    // width: 300,
    // height: 200
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 30,
  },

});

