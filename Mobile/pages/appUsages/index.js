import React from "react";
import Registro from '../registro/index.js'
import UserPage from "../userpage/index.js"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function AppUsages({navigation, route}){
    const register = ()=>{
        if(route.params.cargo == "Administrador"){
            return( <Tab.Screen name="Registro" component={Registro} options={{headerShown:false}} options={{tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="account-multiple-plus" color={color} size={26} />),}}></Tab.Screen>);
        }
    }
    return(
        <Tab.Navigator barStyle={{ backgroundColor: '#FFF' }} activeColor="#F00" >
            <Tab.Screen name="Usuario" component={UserPage} initialParams={route.params}  options={{headerShown:false}} options={{tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="account" color={color} size={26} />),}}></Tab.Screen>
            {
                register()
            }
        </Tab.Navigator> 
    );
}