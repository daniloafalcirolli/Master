import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Registro from "../registro/index.js"
import UserPage from "../userpage/index.js"

const Tab = createBottomTabNavigator();

export default function User(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Registro" component={Registro} options={{headerShown:false}}/>
            <Tab.Screen name="UserPage" component={UserPage} options={{headerShown:false}}/>
        </Tab.Navigator>
    );
}