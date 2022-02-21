import { StyleSheet } from "react-native";
export default StyleSheet.create({
    page:{
        height:"100%",
        backgroundColor:"white",
        fontFamily: "Montserrat_400Regular",
    },
    registrarText:{
        textAlign:"center",
        color:"red",
        fontSize:"60px",
        textShadowColor: "rgba(0, 0, 0, 0.25)",
        textShadowOffset: {width: "3px", height: "3px"},
        textShadowRadius: "3px",
        marginBottom:"40px"
    },
    main: {
        flex:1,
    },
    scroll:{
        height:"200px",
    },
    back: {
        backgroundColor: "#e7e7e7",
        paddingTop: "50px",
        paddingBottom: "20px"
    },
    imageBox: {
        zIndex:"100",
        marginBottom: "-40px",
        width:"150px",
        alignSelf:"center",
    },
    image:{
        zIndex: "-999",
        width: "150px",
        height: "150px",
        border: "5px solid #e7e7e7",
        borderRadius: "30px",
        alignSelf:"center",
    },
    addImage:{
        width:"50px",
        height:"50px",
        alignSelf:"end",
        backgroundColor: "#e7e7e7",
        borderRadius: "50%",
        zIndex:999,
        marginBottom: "-30px",
        marginRight: "-15px"
    },
    inputsBox:{
        height:"550px",
        justifyContent:"space-around",
        marginBottom: "50px"
    },
})