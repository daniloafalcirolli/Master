import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import Style from "./style";
import GStyle from "../global/style/style.js";
import { StatusBar } from "expo-status-bar";


export default function Login({navigation}){
    
    return(
        <View style={Style.page}>
            <StatusBar hidden={true} />
            <View style={GStyle.header}>
                <Image style={GStyle.image} source={require('../global/assets/logo.png')}/>
            </View>
            <Text style={Style.loginText}>Login</Text>
            <View style={Style.form}>
                <TextInput placeholder="CPF" placeholderTextColor="#F00" style={GStyle.input}></TextInput>
                <TextInput placeholder="Senha" placeholderTextColor="#F00" secureTextEntry={true} style={GStyle.input}></TextInput>
            </View>
            <TouchableOpacity style={GStyle.button}>
                <Text style={GStyle.textButton}>Logar</Text>
            </TouchableOpacity>
        </View>
    );
}