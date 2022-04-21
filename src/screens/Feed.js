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
        @jami
      </Paragraph>
      
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      
        <Text style={styles.text}>
          Nud Pob on Commonwealth Ave is so good!
          I love it
        </Text>
        <FeedPic></FeedPic>
      </ScrollView>
    </SafeAreaView>

    <Paragraph>
        @nancy
      </Paragraph>


    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      
        <Text style={styles.text}>
          Nud Pob on Commonwealth Ave is so good!
          
        </Text>
        

      </ScrollView>
    </SafeAreaView>

    <Paragraph>
        @byron
      </Paragraph>


    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      
        <Text style={styles.text}>
          Vejigantes for the win.
        </Text>
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
    //paddingTop: StatusBar.currentHeight,
    width: 300,
    height: 200
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
  },

});

