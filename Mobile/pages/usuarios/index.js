import React from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import Style from './style.js';
import GStyle from '../global/style/style.js'

export default function Usuarios({ navigation }) {
    const [getUsers, setUsers] = React.useState([]);

    function passwordReset(id, nome){
        async function put(){
            let settings = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({senha: "202cb962ac59075b964b07152d234b70", resetsenha: true})
            }
            let item = await fetch(`http://10.87.207.30:3000/usuario/${id}`, settings);
            let resp = await item.json();
            return resp;
        }
        put().then(resp=>{
            if(resp.id!=undefined){
                alert(`Senha de ${nome} foi redefinida com sucesso`)
            }else{
                alert(`Não foi possivel redefinir a senha de ${nome}`)
            }
        })
    }

    function getUsuarios(){
        async function get(){
            let item = await fetch("http://10.87.207.30:3000/usuario");
            let resp = await item.json();
            return resp;
        }
        get().then(resp=>{
            setUsers(resp);
        })
    }
    React.useEffect(()=>{
        getUsuarios();
    },[])
    
    let container = (a, b, s, id, nome) => {
        return(
            <View style={s}>
                <Text style={Style.cpf}>{a}</Text>
                <Text style={Style.nome}>{b}</Text>
                <TouchableOpacity onPress={()=>{passwordReset(id, nome)}} style={Style.botaoReset}><Text style={Style.textReset}>Resetar Senha</Text></TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={Style.page}>
            <View style={GStyle.header}>
                <Image style={GStyle.image} source={require('../global/assets/logo.png')} />
            </View>
            <ScrollView>
                <Text style={Style.userText}>Usuarios</Text>
                {
                    getUsers.map((e, index)=>{
                        if(index%2 == 0){
                            return(
                                container(e.cpf, e.nome, Style.containerBlack, e.id, e.nome)
                            );
                        }else{
                            return(
                                container(e.cpf, e.nome, Style.container, e.id, e.nome)
                            );
                        }
                    })
                }
            </ScrollView>
        </View>
    );
}