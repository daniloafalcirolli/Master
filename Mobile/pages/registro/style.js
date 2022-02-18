import { StyleSheet } from "react-native";
export default StyleSheet.create({
    page:{
        height:'100%',
        backgroundColor:'white',
        fontFamily: "Montserrat_400Regular",
    },
    registrarText:{
        textAlign:'center',
        color:'red',
        fontSize:'60px',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 3,
        marginBottom:40
    },
    main: {
        flex:1,
    },
    scroll:{
        height:'200px',
    },
    back: {
        backgroundColor: '#e7e7e7',
        paddingTop: 50,
        paddingBottom: 20
    },
    image:{
        zIndex: 100,
        width: 150,
        height: 150,
        marginBottom: -40,
        border: '5px solid #e7e7e7',
        borderRadius: '30px',
        alignSelf:'center',
        // position:'absolute',
        // zIndex:100,
    },
    inputsBox:{
        height:'550px',
        justifyContent:'space-around',
        marginBottom: 50
    },
})