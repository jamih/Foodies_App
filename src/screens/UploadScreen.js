import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Button, Image, View, TouchableOpacity} from 'react-native';
import HeaderLogo from '../components/HeaderLogo';
import SecondBackground from '../components/SecondBackground';
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { addPost } from '../api/auth-api'


export default function UploadScreen() {

  const [image, setImage] = useState(null)
  const [text, setText] = useState('')

  const pickImage = async () => {

    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY); //MEDIA_LIBRARY launchImageLibraryAsync  // CAMERA launchCameraAsync

    if (status != "granted") {
      alert("We need permission to use your camera roll if you'd like to include a photo.");
    }
    else{
        
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3]
      });

      console.log(result)

      if (!result.cancelled) {
        setImage(result.uri )
      }
    }
  }

  handlePost = () => {
    addPost({text: text.trim(), localUri: image}).then(ref => { setImage(null), setText('')}).catch(error => {alert(error)})
  }

  return (
      
    // <SafeAreaView>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  }}>
        <HeaderLogo></HeaderLogo>
          <Button title="Pick an image from camera roll" onPress={pickImage} />
   
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}


         
          <TouchableOpacity style={styles.button} onPress={handlePost()}>

            <Text style={styles.buttonText}> Post </Text>

          </TouchableOpacity>
      </View>

      // <View>
      //   <TouchableOpacity onPress={handlePost()}>

      //     <Text> Post </Text>

      //   </TouchableOpacity>
      // </View> 

    // </SafeAreaView>

  );
}

  const styles = StyleSheet.create( {
    button: {
      backgroundColor: "#DDDDDD",
      padding: 10,
    },

    buttonText: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    
    


  })
