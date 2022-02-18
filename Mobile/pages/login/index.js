import React from "react";
import Styles from './style';
import GStyles from '../global/Styles/style'
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import {useFonts,Montserrat_400Regular,Montserrat_500Medium} from '@expo-google-fonts/montserrat';


export default function Login({navigation}){
    const [fontsLoaded] = useFonts({Montserrat_500Medium, Montserrat_400Regular}); 

    return(
        <View style={Styles.page}>
            <View style={GStyles.header}>
                <Image style={GStyles.logo} source={require('../global/assets/logo.png')}></Image>
            </View>
            <View style={Styles.main}>
                <Text style={Styles.loginText}>Login</Text>
                    <View style={Styles.inputsBox}>
                        <TextInput placeholder={"CPF"} style={GStyles.input}></TextInput>
                        <TextInput placeholder={"Senha"} style={GStyles.input} secureTextEntry={true}></TextInput>
                    </View>
                <TouchableOpacity style={GStyles.button}>Logar</TouchableOpacity>
            </View>
        </View>
    );
}