import React, {useState} from "react";
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import Style from "./style";
import GStyle from "../global/style/style.js";
import { StatusBar } from "expo-status-bar";

export default function Registro({navigator}){

    const [getCPF, setCPF] = useState("");
    const [getNome, setNome] = useState("");
    const [getEmail, setEmail] = useState("");
    const [getTelefone, setTelefone] = useState("");
    const [getSenha, setSenha] = useState("");
    const [getSenha2, setSenha2] = useState("");
    const [getMsg, setMsg] = useState({msg: "",style: Style.removemsg});

    const items = [
        {text: "CPF", keyboardtype:'number-pad' ,acao: (value)=>{setCPF(value)}},
        {text: "Nome", acao: (value)=>{setNome(value)}},
        {text: "Email", acao: (value)=>{setEmail(value)}},
        {text: "Telefone", keyboardtype:'number-pad', acao: (value)=>{setTelefone(value)}},
        {text: "Senha", type: "pass", acao: (value)=>{setSenha(value)}},
        {text: "Conf. Senha",type: "pass", acao: (value)=>{setSenha2(value)}}
    ]

    const registrar = () => {
        console.log(getSenha, getSenha2)
        if(getSenha === getSenha2){
            let json = {
                cpf: getCPF,
                nome: getNome,
                email: getEmail,
                telefone: getTelefone,
                senha: getSenha,
            }
        }else{
            console.log("erro")
            setMsg({
                text: "As senhas não conferem",
                style: Style.msg
            })
            setTimeout(()=>{setMsg({
                msg: "",
                style: Style.removemsg
            })}, 3000)
        }
    }

    return(
        <View style={Style.page}>
            <StatusBar hidden={true} />
            <View style={GStyle.header}>
                <Image style={GStyle.image} source={require('../global/assets/logo.png')}/>
            </View>
            <ScrollView style={Style.scroll}>
                <Text style={Style.regText}>Registro</Text>
                <Text style={getMsg.style}>{getMsg.text}</Text>
                {
                    items.map((e, index)=>{
                        let [getStyle, setStyle] = React.useState(GStyle.input);
                        if(e.type == "pass"){
                            return(<TextInput style={getStyle} key={index} placeholderTextColor="#F00" onChangeText={(element)=>{e.acao(element)}} secureTextEntry={true} onFocus={()=>{setStyle(GStyle.inputFocus)}} onBlur={()=>{setStyle(GStyle.input)}} placeholder={e.text}></TextInput>);
                        }else{
                            return(<TextInput style={getStyle} key={index} placeholderTextColor="#F00" keyboardType={e.keyboardtype} onChangeText={(element)=>{e.acao(element)}} onFocus={()=>{setStyle(GStyle.inputFocus)}} onBlur={()=>{setStyle(GStyle.input)}} placeholder={e.text} ></TextInput>)
                        }
                    })
                }
                <TouchableOpacity style={Style.addPhoto}>
                    <Text style={Style.textAddPhoto}>Escolha uma foto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={GStyle.button} onPress={()=>registrar()}>
                    <Text style={GStyle.textButton} >Registrar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}