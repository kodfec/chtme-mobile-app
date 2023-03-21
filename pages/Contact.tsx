import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import style from '../CSS/ChatHome';
import Icon from 'react-native-vector-icons/AntDesign';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ChatHome({navigation}) {
  async function checkuser() {
    var user = await AsyncStorage.getItem('user');
    if (user == '0') {
      navigation.navigate('Registration');
    }
  }
  useEffect(() => {
    setTimeout(checkuser, 3000);
  });
  const check = <Icon name="check" size={15} style={{color: '#0008'}} />;

  const [item, Setitem] = useState([1, 2, 3]);

  async function chtLoad() {
    const userJSON = await AsyncStorage.getItem('user');
    const form = new FormData();
    form.append('userJSON', userJSON);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        // Alert.alert('response', xhttp.responseText);
        Setitem(JSON.parse(xhttp.responseText));
      }
    };
    xhttp.open('POST', 'http://10.0.2.2/viva_react_cht/homeCht.php', true);
    xhttp.send(form);
  }

  chtLoad();
  const ui = (
    <SafeAreaView style={style.Main}>
      <Header />
      <View style={style.searchare}>
        <TextInput
          style={style.searchbar}
          placeholder="Search..."
          placeholderTextColor={'#0008'}
        />
        <TouchableOpacity style={style.icon}>
          <Icon name="search1" size={24} style={{color: '#0008'}} />
        </TouchableOpacity>
      </View>
      <FlatList renderItem={chatItemUi} data={item} />
    </SafeAreaView>
  );

  return ui;

  function chatItemUi({item}) {
    const chatItemUi = (
      <TouchableOpacity
        style={style.chatItem}
        onPress={() => {
          var obj = {
            name: item.name,
            id: item.id,
            url: item.profile_url,
          };
          navigation.navigate('Msg', obj);
        }}>
        <Image
          source={{
            uri: 'http://10.0.2.2/viva_react_cht/' + item.profile_url,
          }}
          style={style.image}
        />
        <View style={style.secondView}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
            {item.name}
          </Text>
          <Text numberOfLines={1} style={{color: '#0008', fontSize: 15}}>
            {item.user_id == 1 ? check : null}
            {item.msg}
          </Text>
        </View>
        <View style={style.therdView}>
          <Text> {item.count != 0 ? item.time : null}</Text>
          <View style={item.count != 0 ? style.msgCont : null}>
            <Text style={{fontWeight: 'bold', color: '#000', padding: 1}}>
              {item.count != 0 ? item.count : null}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
    return chatItemUi;
  }
}

export default ChatHome;
