import { StyleSheet } from "react-native";
export default StyleSheet.create({
    header:{
        width: '100%',
        height:'70px', 
        backgroundColor: '#F00',
        alignItems:'left',
        justifyContent:'center',
    },
    logo:{
        width: '200px',
        height:'50px',
        marginLeft: '2%',
    },
    input:{
        backgroundColor:'white',
        padding:'10px',
        width: '80%',
        height:'50px', 
        alignSelf:'center',
        fontSize:'30px',
        borderWidth:0,
        borderBottomWidth:'2px',
        borderBottomColor: 'red',
        placeholderTextColor:'red'
    },
    button:{
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