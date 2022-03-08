import React from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import Style from './style.js';
import GStyle from '../global/style/style.js'

export default function Usuarios({ navigation }) {
    const [getUsers, setUsers] = React.useState([]);

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
    

    return (
        <View style={Style.page}>
            <View style={GStyle.header}>
                <Image style={GStyle.image} source={require('../global/assets/logo.png')} />
            </View>
            <ScrollView>
                <Text style={Style.userText}>Usuarios</Text>
                {
                    getUsers.map(e=>{
                        return(
                            <View>
                                <Text>{e.cpf}</Text>
                                <Text>{e.nome}</Text>
                                <TouchableOpacity><Text>Resetar Senha</Text></TouchableOpacity>
                            </View>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
}