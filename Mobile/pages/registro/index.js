import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import Style from "./style";
import GStyle from "../global/style/style.js";
import { StatusBar } from "expo-status-bar";

export default function Registro({navigator}){
    
    const color = "#F00"
    const json = [
        {
            text: "CPF"
        },
        {
            text: "Nome"
        },
        {
            text: "Email"
        },
        {
            text: "Telefone"
        },
        {
            text: "Senha"
        },
        {
            text: "Conf. Senha"
        }
    ]

    return(
        <View style={Style.page}>
            <StatusBar hidden={true} />
            <View style={GStyle.header}>
                <Image style={GStyle.image} source={require('../global/assets/logo.png')}/>
            </View>
            <ScrollView style={Style.scroll}>
                <Text style={Style.regText}>Registro</Text>
                {
                    json.map((e,index)=>{
                        let [getStyle, setStyle] = React.useState(GStyle.input);
                        if(index > (e.length - 2)){
                            return(<TextInput style={getStyle} placeholderTextColor="#F00" onFocus={()=>{setStyle(GStyle.inputFocus)}} onBlur={()=>{setStyle(GStyle.input)}} secureTextEntry={true} placeholder={e.text} ></TextInput>);
                        }else{
                            return(<TextInput style={getStyle} placeholderTextColor="#F00" onFocus={()=>{setStyle(GStyle.inputFocus)}} onBlur={()=>{setStyle(GStyle.input)}} placeholder={e.text} ></TextInput>)
                        }
                    })
                }
                <TouchableOpacity style={Style.addPhoto}>
                    <Text style={Style.textAddPhoto}>Escolha uma foto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={GStyle.button}>
                    <Text style={GStyle.textButton}>Registrar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

