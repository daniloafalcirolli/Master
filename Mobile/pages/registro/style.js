import { StyleSheet } from "react-native";
export default StyleSheet.create({
    page:{
        backgroundColor:'white',
        fontFamily: "Montserrat_400Regular",
        width:'100%',
        height:'100%',
    },
    header:{
        width: '100%',
        height:'8%', 
        backgroundColor: '#F00',
        alignItems:'left',
        justifyContent:'center',
    },
    main:{
        justifyContent:'space-around',
        height:'92%',
    },
    logo:{
        width: '40%',
        height:'40%', 
        marginLeft: '2%',
    },
    registrarText:{
        alignSelf:'center',
        color:'red',
        fontSize:'60px',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 3, 
    },
    inputsBox:{
        height:'50%',
        justifyContent:'space-around',
    },
    inputs:{
        backgroundColor:'white',
        padding:'10px',
        width: '80%',
        height:'50px', 
        alignSelf:'center',
        fontSize:'30px',
        border:'2px solid #E7E7E7'
    },
    registrarButton:{
        fontSize:'40px',
        alignSelf:'center',
        color:'white',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        width: '200px',
        height:'70px',
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowOpacity:0.25,
        shadowOffsetColor: 'rgb(0, 0, 0)',
        shadowRadius: 4
    }
})