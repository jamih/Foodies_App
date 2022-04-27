import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from '../screens/Feed';
import ProfileScreen from '../screens/ProfileScreen';
import UploadScreen from '../screens/UploadScreen';
import { Ionicons } from '@expo/vector-icons';
import MapScreen from "./MapScreen";
import { Foundation } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
      return (
          <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false}} >
              <Tab.Screen 
              name="Home"
              component={Feed} 
              options={{
              tabBarIcon: (size) => (
                <Ionicons name = "home" size = {30}/>
              ),
              }}
          />
              <Tab.Screen 
              name='Upload' 
              component={UploadScreen} 
              options={{
              tabBarIcon: (size) => (
                <Ionicons name = "camera" size = {30}/>
              ),
              }}
          />
              <Tab.Screen 
              name='Map' 
              component={MapScreen}  
              options={{
              tabBarIcon: (size) => (
                <Foundation name="map" size={24} color="black" />
              ),
          }}
          />
          
              <Tab.Screen 
              name='Me' 
              component={ProfileScreen}  
              options={{
              tabBarIcon: (size) => (
                <Ionicons name = "ios-person" size = {28}/>
              ),
          }}
          />

              
          </Tab.Navigator>
          
      ); 
      
}