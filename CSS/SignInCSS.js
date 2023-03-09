const {StyleSheet} = require('react-native');

const style = StyleSheet.create({
  Body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECF2FF',
  },
  signInbox: {
    width: 300,
    height: 400,
    borderRadius: 20,
    alignItems: 'center',
  },
  signInInput1: {
    width: '90%',
    height: 45,
    fontSize: 15,
    borderWidth: 1,
    paddingStart: 35,
    borderRadius: 20,
  },
  signInIcon1: {
    fontSize: 20,
    position: 'absolute',
    start: 10,
  },
  signInView1: {
    top:130,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:10,
  },
  signIn:{
    top:80,
  },
  chtme:{
    bottom:60,
    fontSize:40,
    fontWeight:"bold",
    color:"#0008"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;
