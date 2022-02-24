import React from "react";
import GStyle from "../global/style/style.js";
import Style from "./style.js";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function UserPage({navigator}){

    const json = [
        {text:"Email"},
        {text:"Telefone"},
        {text:"Nova Senha",type: "pass"},
    ]

    return(
        <View style={Style.page}>
            <StatusBar hidden={true} />
            <View style={GStyle.header}>
                <Image style={GStyle.image} source={require('../global/assets/logo.png')}/>
            </View>
            <ScrollView>
                <Image style={Style.Img} source={require("../global/assets/userimage.jpg")}/>
                <View style={Style.backInfo}>
                    <Text style={Style.nome}>Fulado de tal da silva sauro que não sei o nome</Text>
                    <View style={Style.cpf}>
                        <Text style={Style.cpfText}> CPF </Text> 
                        <Text style={Style.cpfInfo}> 17851872587 </Text> 
                    </View>
                    <View style={Style.form}>
                        <Text style={Style.altInfoText}>Alterar Informações</Text>
                        {
                            json.map((e,index)=>{
                                let [getStyle, setStyle] = React.useState(GStyle.input);
                                if(e.type == "pass"){
                                    return(<TextInput style={getStyle} placeholderTextColor="#F00" onFocus={()=>{setStyle(GStyle.inputFocus)}} onBlur={()=>{setStyle(GStyle.input)}} secureTextEntry={true} placeholder={e.text} ></TextInput>);
                                }else{
                                    return(<TextInput style={getStyle} placeholderTextColor="#F00" onFocus={()=>{setStyle(GStyle.inputFocus)}} onBlur={()=>{setStyle(GStyle.input)}} placeholder={e.text} ></TextInput>)
                                }
                            })
                        }
                    </View>
                    <TouchableOpacity style={Style.button}><Text style={Style.textButton}>Alterar informações</Text></TouchableOpacity>
                </View>
            </ScrollView> 
        </View>
    );
}
