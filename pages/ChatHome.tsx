import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import style from '../CSS/ChatHome';
import Icon from 'react-native-vector-icons/AntDesign';


function ChatHome({ navigation }){

  const ui = (
    <SafeAreaView style={style.Main}>
      <Header />
      <View style={style.searchare}>
        <TextInput style={style.searchbar} placeholder='Search...' placeholderTextColor={"#0008"}/>
        <TouchableOpacity style={style.icon}>
        <Icon name='search1' size={24} style={{color:"#0008"}} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

  return ui;
}

export default ChatHome