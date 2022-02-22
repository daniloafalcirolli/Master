import React from "react";
import Styles from "./style";
import GStyles from "../global/Styles/style"
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import {useFonts,Montserrat_400Regular,Montserrat_500Medium} from "@expo-google-fonts/montserrat";
import {launchImageLibrary} from "react-native-image-picker";
import style from "./style";


export default function Registro({navigation}){
    const [fontsLoaded] = useFonts({Montserrat_500Medium, Montserrat_400Regular}); 

    return(
        <View style={Styles.page}>
            <View style={GStyles.header}>
                <Image style={GStyles.logo} source={require("../global/assets/logo.png")}></Image>
            </View>
            <View style={Styles.main}>
                <Text style={Styles.registrarText}>Registrar</Text>
                <ScrollView style={Styles.scroll}>
                    <View style={Styles.imageBox}>
                        <TouchableOpacity onPress={pickImage}>
                            <Image source={require('../global/assets/cam.jpg')} style={Styles.addImage}></Image>
                        </TouchableOpacity>
                        <Image source={require('../global/assets/userimage.jpg')} style={Styles.image}></Image>
                    </View>
                    <View style={Styles.back}>
                        <View style={Styles.inputsBox}>
                            <TextInput placeholder={"Nome"} style={GStyles.input}></TextInput>
                            <TextInput placeholder={"Email"} style={GStyles.input}></TextInput>
                            <TextInput placeholder={"Telefone"} style={GStyles.input}></TextInput>
                            <TextInput placeholder={"CPF"} style={GStyles.input}></TextInput>
                            <TextInput placeholder={"Senha"} style={GStyles.input} secureTextEntry={true}></TextInput>
                            <TextInput placeholder={"Conf. Senha "} style={GStyles.input} secureTextEntry={true}></TextInput>
                        </View>
                        <TouchableOpacity style={GStyles.button}>Registrar</TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}