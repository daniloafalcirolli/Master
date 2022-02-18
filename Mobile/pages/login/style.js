import { StyleSheet } from "react-native";
export default StyleSheet.create({
    page:{
        backgroundColor:'white',
        fontFamily: "Montserrat_400Regular",
        width:'100%',
        height:'100%',
    },
    main:{
        justifyContent:'space-around',
        height:'92%',
    },
    loginText:{
        alignSelf:'center',
        color:'red',
        fontSize:'100px',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 3, 
    },
    inputsBox:{
        height:'25%',
        justifyContent:'space-around',
    }
})