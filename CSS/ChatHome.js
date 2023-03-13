const { StyleSheet } = require("react-native");

const style = StyleSheet.create({
    Main:{
        flex: 1,
        backgroundColor: '#EDF1D6',
    },
    searchare:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    icon:{
        position:"absolute",
        start:"80%",
        
    },
    searchbar:{
        padding:10,
      paddingRight: 48,
        color:"#0008",
        width:"80%",
        borderStyle:"solid",
        borderWidth:1,
        borderRadius:20,
    }
})

export default style;