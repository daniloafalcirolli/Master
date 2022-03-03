import React, {useState} from "react";
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import Style from "./style";
import GStyle from "../global/style/style.js";
import { StatusBar } from "expo-status-bar";
import md5 from "../global/script/md5.js"
import * as ImagePicker from 'expo-image-picker';

export default function Registro({ navigator }){

    const items = [
        {text: "CPF", keyboardtype:'number-pad' ,acao: (value)=>{setCPF(value)}},
        {text: "Nome", acao: (value)=>{setNome(value)}},
        {text: "Email", acao: (value)=>{setEmail(value)}},
        {text: "Telefone", keyboardtype:'number-pad', acao: (value)=>{setTelefone(value)}},
        {text: "Senha", type: "pass", acao: (value)=>{setSenha(value)}},
        {text: "Conf. Senha",type: "pass", acao: (value)=>{setSenha2(value)}}
    ]
    
    const [getFoto, setFoto] = useState('');
    
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.photo,
          base64: true,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });

    
        if (!result.cancelled && result.base64.length < 1000000) {
            setFoto(result.base64);
        }
        else if(!result.cancelled){
            alert('Selecione uma imagem menor');
        }
    };

    const [getCPF, setCPF] = useState("");
    const [getNome, setNome] = useState("");
    const [getEmail, setEmail] = useState("");
    const [getTelefone, setTelefone] = useState("");
    const [getSenha, setSenha] = useState("");
    const [getSenha2, setSenha2] = useState("");

    const registrar = () => {
        if(getSenha === getSenha2 && (getSenha != "" || getSenha2 != "")){
            let reg = {
                cpf: getCPF,
                nome: getNome,
                email: getEmail,
                telefone: getTelefone,
                senha: md5(getSenha),
                foto: getFoto,
                cargo : "professor",
            }
            let settings = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(reg),
            }
            async function post() {
                let info = await fetch("http://192.168.0.101:3000/usuario", settings);
                let resp = await info.json();
                return resp;
            }
            post().then(resp=>{
                if(resp.length === 1){
                    navigator.navigate('UserPage');
                }
            })
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
                <TouchableOpacity style={Style.addPhoto} onPress={()=>{pickImage()}}>
                    <Text style={Style.textAddPhoto}>Escolha uma foto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={GStyle.button} onPress={()=>registrar()}>
                    <Text style={GStyle.textButton} >Registrar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}