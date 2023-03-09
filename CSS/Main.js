const {StyleSheet} = require('react-native');

const style = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: '#3A1078',
    alignItems: 'center',
  },
  Home: {
    flex: 1,
    backgroundColor:"#ECF2FF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  pic: {
    width: 500,
    height: 500,
  },
  pages: {
    alignItems: 'center',
    justifyContent: 'center',
    top: -10,
    // backgroundColor: '#5E50AC',
    height:"40%",
    width: '100%',
    borderRadius: 80,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: -4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  gradient: {
    flex: 1,
  },
  animatedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  chtme:{
    fontSize:40,
    fontWeight:"bold",
    color:"#0008"
  },
  btn:{
    alignItems:"center",
    justifyContent:"center",
    width:250,
    height:45,
    backgroundColor:"#8BF5FA",
    marginBottom:10,
    borderRadius:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 3.84,
    elevation: 5,
    bottom:20
  },
  btn2:{
    alignItems:"center",
    justifyContent:"center",
    width:250,
    height:45,
    backgroundColor:"#F9F54B",
    marginBottom:10,
    borderRadius:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 3.84,
    elevation: 5,
    bottom:20
  },
  btnText:{
    color:"#000",
    fontSize:20,
    fontWeight:700,
  },
  virul:{
    top:50,
    color:"#000",
    fontWeight:"bold",
  }
});

export default style;
