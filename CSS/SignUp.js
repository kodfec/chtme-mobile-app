const {StyleSheet} = require('react-native');

const style = StyleSheet.create({
  Body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDF1D6',
  },
  signInbox: {
    width: 350,
    height: 570,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection:"column",
    marginBottom:"10%",

  },
  signInInput1: {
    width: '90%',
    height: 45,
    fontSize: 15,
    borderWidth: 1,
    paddingStart: 35,
    borderRadius: 20,
  },
  dropDown: {
    backgroundColor:"#EDF1D6",
    width: '90%',
    height: 45,
    fontSize: 15,
    borderWidth: 1,
    paddingStart: 35,
    borderRadius: 20,
  },
  signInIcon1: {
    fontSize: 20,
    position:"relative",
    start: 31,
    zIndex:100
  },
  signInView1: {
    top:90,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:10,
    start:-10,

  },
  signInView2: {
    top:90,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:10,
    start:-10,

  },
  signIn:{
    fontWeight:"bold",
    top:50,
    fontSize:26,
    padding:0,
  },
  chtme:{
    fontSize:40,
    fontWeight:"bold",
    color:"#0008"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInbtn:{
    top:"16%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#8BF5FA",
    width:"80%",
    height:40,
    borderRadius:20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 8,
  },
  signUpbtn:{
    top:"18%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#F9F54B",
    width:"80%",
    height:40,
    borderRadius:20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 8,
  },
  icon:{
    height:100,
    width:100,

  },
  signInbtntext:{
    fontSize:18,
    fontWeight:"bold",
    textTransform:"uppercase"
  },
  signUpbtntext:{
    fontSize:18,
    fontWeight:"bold",
    textTransform:"uppercase"
  },
  profilebtn:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#DC8449",
    height:45,
    width:180,
    borderRadius:10,
  },
  profiletext:{
    fontWeight:"bold"
  }
});

export default style;
