import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Image, View, Dimensions, Platform, FlatList, TextInput } from 'react-native';
import SecondBackground from '../components/SecondBackground'
import HeaderLogo from '../components/HeaderLogo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'
import InfiniteScroll from 'react-infinite-scroll-component' 
import FeedPic from '../components/FeedPic'
import { useIsFocused } from '@react-navigation/native';
import moment from 'moment';
import firebase from 'firebase/app'
import 'firebase/firestore';

export default function Feed() {

  const [posts, setPosts] = useState(null)

  const fetchData = async () => {

    const db = firebase.firestore()
    
    const query = await db.collection("posts").orderBy('timestamp', 'desc').get()
    const post = []
    query.forEach(doc => post.push(doc.data()))

    setPosts(post)
    // console.log(post)
  }

  const isFocused = useIsFocused()
  useEffect(() => {
    fetchData()
  }, [isFocused])

  renderPost = post => {
    return (
      <View style={styles.feedItem}>

        <View style={{ flex: 1 }}>

          {/* <Image source={require("../../assets/images/profile.png")} style={styles.avatar} /> */}

          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View>
              <Text style={styles.name}>{post.name}</Text>
              <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
            </View>
          </View>

          <Text style={styles.post}>{post.text}</Text>

          <Image source={{uri: post.image}} style={styles.postImage} resizeMode="cover" />

          <View style={{ flexDirection: "row" }}>
            <Image source={require('../../assets/icons/like.png')} color="#73788B" style={styles.postIcon} marginRight={16}/>
          </View>

        </View>

      </View>
    );
  }

  return (
    
    <View style={StyleSheet.container}>
      <SafeAreaView>
        <ScrollView>
          {/* Header */}
          <View style={styles.headerWrapper}>
              <Text style={styles.headerTitle}>
                  <Text>
                      Foodies Feed
                  </Text>
              </Text>
          </View>
          {/* Search Bar */}
          <View style={styles.searchWrapper}>
              <Image source={require('../../assets/icons/search.png')}
              style={styles.searchIcon}
              />
              <View style={styles.search}>
                  <TextInput 
                      style={styles.searchText}
                      placeholder="Search" />
              </View>
          </View>
          {/* Questions */}
          <View style={styles.questionsWrapper}>
              <FlatList
              style={styles.feed}
              data={posts}
              renderItem={({ item }) => this.renderPost(item)}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              ></FlatList>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
    },
    headerWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingTop: Platform.OS === 'android' ? 50 : 15,
      alignItems: 'center',
    },
    headerTitle: {
      // color: COLORS.primary,
      fontFamily: 'Avenir-Medium',
      fontSize: 30,
      top: 6,
    },
    searchWrapper:
    {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: Dimensions.get("window").width-40,
      height: Dimensions.get("window").height/20,
      marginVertical: 15,
      marginHorizontal: 20,
      backgroundColor: '#EAE9E9',
      top: 5,
      borderRadius: 10,
    },
    searchIcon: {
      width: 25,
      height: 25,
      borderRadius: 20,
      left: 10,
    },
    postIcon: {
      width: 25,
      height: 25,
      borderRadius: 20,
    },
    search:
    {
      flex: 1,
      marginLeft: 15,
    },
    searchText:
    {
      fontFamily: 'Arial',
      fontSize: 16,
      color: '#747480',
    },
    questionsWrapper:
    {
      height: Dimensions.get("window").height/1.48,
    },
    addButton:
    {
      width: 60,
      height: 60,
      backgroundColor: '#FEC62F',
      borderRadius: 100,
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
      right: 18,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
    },
    addTitle:
    {
      fontFamily: 'Avenir',
      fontSize: 40,
      bottom: 0, 
      alignSelf: 'center',
    },

  feed: {
      marginHorizontal: 16
  },
  feedItem: {
      backgroundColor: "#FFF",
      borderRadius: 5,
      padding: 8,
      flexDirection: "row",
      marginVertical: 8
  },
  avatar: {
      width: 36,
      height: 36,
      borderRadius: 18,
      marginRight: 16
  },
  name: {
      fontSize: 15,
      fontWeight: "500",
      color: "#454D65"
  },
  timestamp: {
      fontSize: 11,
      color: "#C4C6CE",
      marginTop: 4
  },
  post: {
      marginTop: 16,
      fontSize: 14,
      color: "#838899"
  },
  postImage: {
      width: undefined,
      height: 150,
      borderRadius: 5,
      marginVertical: 16
  }
})









{/* <SecondBackground>
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
 */}
