import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

  return (

    <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Dashboard" component={Dashboard} />


    </Tab.Navigator>

  );

};

export default BottomTabNavigator;