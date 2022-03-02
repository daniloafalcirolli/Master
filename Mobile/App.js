import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Login from "./pages/login/index.js"
import AppUsages from "./pages/appUsages/index.js"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/> */}
        <Stack.Screen name='appUsages' component={AppUsages} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


