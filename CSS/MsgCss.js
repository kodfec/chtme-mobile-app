const {StyleSheet} = require('react-native');

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ECF2FF',
  },
  Main: {
    backgroundColor: 'red',
    height: 65,
    flexDirection: 'row',
    backgroundColor: '#EDF1D6',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 30,
    start: 20,
  },
  backView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameView: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  msgViewLeft: {
    top:6,
    backgroundColor: 'lightblue',
    borderRadius: 15,
    padding: 12,
    marginHorizontal:8,
    marginBottom:6,
    alignSelf:"flex-start",
  },
  msgViewRight: {
    top:6,
    backgroundColor: 'lightblue',
    borderRadius: 15,
    padding: 12,
    marginHorizontal:8,
    marginBottom:6,
    alignSelf:"flex-end"
  },
  msgtext:{
    color: 'black',
    fontSize: 16,
  },
  timeView: {
    position: 'absolute',
    bottom: 10,
    right: 30,
  },
  timeText: {
    fontSize: 13,
    color: 'gray',
  },
  sendingAreaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  textInput: {
    fontSize: 16,
    color: 'black',
  },
  sendButton: {
    backgroundColor: '#3f51b5',
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default style;
