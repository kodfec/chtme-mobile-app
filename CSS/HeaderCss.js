const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  header: {
    marginTop:1,
    marginBottom:15,
    height: 60,
    backgroundColor: '#EDF1D6',
    flexDirection: 'row',
    alignItems: 'center',
    //   justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  logo: {
    width: 60,
    height: 40,
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  chtme: {
    fontWeight: 'bold',
    start: 1,
    fontSize: 20,
    color:"#0008"
  },
  modalWrapper: {
    flex: 1,
    bottom:"80%",
    
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    position: 'absolute',
    bottom: 15,
    right: 15,
    maxWidth: '100%',
  },
  menuItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
});

export default styles;
