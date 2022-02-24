import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import Style from "./style";
import GStyle from "../global/style/style.js";
import { StatusBar } from "expo-status-bar";


export default function Login({navigation}){
    
    const json = [
        {text:"CPF", keyboardtype: "number-pad"},
        {text:"Senha",type: "pass"},
    ]

    return(
        <View style={Style.page}>
            <StatusBar hidden={true} />
            <View style={GStyle.header}>
                <Image style={GStyle.image} source={require('../global/assets/logo.png')}/>
            </View>
            <Text style={Style.loginText}>Login</Text>
            <View style={Style.form}>
                {
                    json.map((e,index)=>{
                        let [getStyle, setStyle] = React.useState(GStyle.input);
                        if(e.type == "pass"){
                            return(<TextInput style={getStyle} key={index} placeholderTextColor="#F00" onFocus={()=>{setStyle(GStyle.inputFocus)}} onBlur={()=>{setStyle(GStyle.input)}} placeholder={e.text} secureTextEntry={true}></TextInput>);
                        }else{
                            return(<TextInput style={getStyle} key={index} placeholderTextColor="#F00" onFocus={()=>{setStyle(GStyle.inputFocus)}} onBlur={()=>{setStyle(GStyle.input)}} placeholder={e.text} keyboardType={e.keyboardtype}></TextInput>)
                        }
                    })
                }
            </View>
            <TouchableOpacity style={GStyle.button}>
                <Text style={GStyle.textButton}>Logar</Text>
            </TouchableOpacity>
        </View>
    );
}