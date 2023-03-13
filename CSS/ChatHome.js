const {StyleSheet} = require('react-native');

const style = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: '#EDF1D6',
  },
  searchare: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    start: '80%',
  },
  searchbar: {
    padding: 10,
    paddingRight: 48,
    color: '#0008',
    width: '80%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 20,
  },
  chatItem: {
    // backgroundColor:"red",
    top:10,
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 55,
    height:55,
    borderRadius: 30,
  },
  secondView: {
    justifyContent: 'center',
    // backgroundColor:"blue",
    paddingStart: 20,
    width: '65%',
  },
  therdView: {
    justifyContent: 'center',
    alignItems: 'center',
    start: 10,
    paddingEnd:10,
    // backgroundColor: 'green',
    width: '20%',
  },
});

export default style;
