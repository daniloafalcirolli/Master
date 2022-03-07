import React from "react";
import GStyle from "../global/style/style.js";
import Style from "./style.js";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import MaskInput from "react-native-mask-input";

export default function UserPage({navigator, route}){
    
    const {nome, cpf, email, telefone, foto} = route.params
    const [getEmail, setEmail] = React.useState(email);
    const [getTelefone, setTelefone] = React.useState(telefone);
    const [getSenha, setSenha] = React.useState("");

    const json = [
        {text:"Email", value: getEmail, acao: (value)=>{setEmail(value)}},
        {text:"Telefone" , value: getTelefone, acao: (value)=>{setTelefone(value)}, mask: ["(", /\d/, /\d/, ")", ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]},
        {text:"Nova Senha", value: getSenha, acao: (value)=>{setSenha(value)}, type: "pass"}
    ]

    
    return(
        <View style={Style.page}>
            <StatusBar hidden={true} />
            <View style={GStyle.header}>
                <Image style={GStyle.image} source={require('../global/assets/logo.png')}/>
            </View>
            <ScrollView>
                <Image style={Style.Img} source={{uri: "data:image/jpeg;base64,"+foto}}/>
                <View style={Style.backInfo}>
                    <Text style={Style.nome}>{nome}</Text>
                    <View style={Style.cpf}>
                        <Text style={Style.cpfText}> CPF </Text> 
                        <Text style={Style.cpfInfo}> {cpf} </Text> 
                    </View>
                    <View style={Style.form}>
                        <Text style={Style.altInfoText}>Alterar Informações</Text>
                        {
                            json.map((e,index)=>{
                                let [getStyle, setStyle] = React.useState(GStyle.input);
                                if(e.type == "pass"){
                                    return(<TextInput style={getStyle} placeholderTextColor="#F00" onFocus={()=>{setStyle(GStyle.inputFocus)}} onBlur={()=>{setStyle(GStyle.input)}} placeholder={e.text} value={e.value} onChangeText={(element)=>{e.acao(element)}} secureTextEntry={true} ></TextInput>);
                                }else{
                                    return(<MaskInput style={getStyle} placeholderTextColor="#F00" onFocus={()=>{setStyle(GStyle.inputFocus)}} onBlur={()=>{setStyle(GStyle.input)}} placeholder={e.text} value={e.value} onChangeText={(element)=>{e.acao(element)}} mask={e.mask}></MaskInput>)
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