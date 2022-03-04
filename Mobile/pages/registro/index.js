import React, {useState} from "react";
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import Style from "./style";
import GStyle from "../global/style/style.js";
import { StatusBar } from "expo-status-bar";
import md5 from "../global/script/md5.js"
import * as ImagePicker from 'expo-image-picker';

export default function Registro({ navigator }){

    const [getMSG, setMSG] = useState({text: "", style: Style.msgOff});
    
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.photo,
            base64: true,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        
        
        if (!result.cancelled) {
            setFoto(result.base64);
        }
    };
    
    const [getFoto, setFoto] = useState("");
    const [getCPF, setCPF] = useState("");
    const [getNome, setNome] = useState("");
    const [getEmail, setEmail] = useState("");
    const [getTelefone, setTelefone] = useState("");
    const [getSenha, setSenha] = useState("");
    const [getSenha2, setSenha2] = useState("");

    const items = [
        {text: "CPF", keyboardtype:'number-pad' ,acao: (value)=>{setCPF(value)}, valor: getCPF},
        {text: "Nome", acao: (value)=>{setNome(value)}, value: getNome},
        {text: "Email", acao: (value)=>{setEmail(value)}, value: getEmail},
        {text: "Telefone", keyboardtype:'number-pad', acao: (value)=>{setTelefone(value)}, value: getTelefone},
        {text: "Senha", type: "pass", acao: (value)=>{setSenha(value)}, value: getSenha},
        {text: "Conf. Senha",type: "pass", acao: (value)=>{setSenha2(value)}, value: getSenha2}
    ]
    
    const registrar = () => {
        if(getSenha === getSenha2 && getSenha != "" && getSenha2 != "" && getCPF != "" && getNome != "" && getEmail != "" && getTelefone != ""){
            let reg = {
                nome: getNome,
                telefone: getTelefone,
                cargo : "professor",
                email: getEmail,
                senha: md5(getSenha),
                foto: getFoto,
                cpf: getCPF,
            }
            let settings = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(reg),
            }
            async function post() {
                let info = await fetch("http://10.87.207.30:3000/usuario ", settings);
                let resp = await info.json();
                return resp;
            }
            post().then(resp=>{
                if(resp.id === undefined){
                    setMSG({text: resp.msg || "Algum camp já existe, tente novamente.", style: Style.msg});
                    setTimeout(()=>{
                        setMSG({text: "", style: Style.msgOff});
                    },4000);
                }else{
                    setCPF("");
                    setNome("");
                    setEmail("");
                    setTelefone("");
                    setFoto("");
                    setSenha("");
                    setSenha2("");
                    setMSG({text: "Adicionado com sucesso", style: Style.msg});
                    setTimeout(()=>{
                        setMSG({text: "", style: Style.msgOff});
                    },4000);
                }
            })
        }else{
            setMSG({text: "Algum campo não está preencido, tente novamente.", style: Style.msg});
            setTimeout(()=>{
                setMSG({text: "", style: Style.msgOff});
            },4000);
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
                <Text style={getMSG['style']}>{getMSG["text"]}</Text>
                {
                    items.map((e, index)=>{
                        let [getStyle, setStyle] = React.useState(GStyle.input);
                        if(e.type == "pass"){
                            return(<TextInput style={getStyle} key={index} placeholderTextColor="#F00" onChangeText={(element)=>{e.acao(element)}} onFocus={()=>{setStyle(GStyle.inputFocus)}} onBlur={()=>{setStyle(GStyle.input)}} placeholder={e.text} value={e.valor} secureTextEntry={true}></TextInput>);
                        }else{
                            return(<TextInput style={getStyle} key={index} placeholderTextColor="#F00" onChangeText={(element)=>{e.acao(element)}} onFocus={()=>{setStyle(GStyle.inputFocus)}} onBlur={()=>{setStyle(GStyle.input)}} placeholder={e.text} value={e.valor} keyboardType={e.keyboardtype}></TextInput>)
                        }
                    })
                }
                <TouchableOpacity style={Style.addPhoto} onPress={()=>{pickImage()}}>
                    <Text style={Style.textAddPhoto}>Escolha uma foto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={GStyle.button} onPress={()=>registrar()}>
                    <Text style={GStyle.textButton}>Registrar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}