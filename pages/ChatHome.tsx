import {
  Alert,
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
      <FlatList renderItem={chatItemUi} data={item}  />
    </SafeAreaView>
  );

  return ui;

  function chatItemUi({item}) {
    const chatItemUi = (
      <TouchableOpacity style={style.chatItem}>
        <Image
          source={{
            uri: 'http://10.0.2.2/viva_react_cht/'+item.profile_url,
          }}
          style={style.image}
        />
        <View style={style.secondView}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
            {item.name}
          </Text>
          <Text numberOfLines={1} style={{color: '#0008'}}>
            {item.msg}
          </Text>
        </View>
        <View style={style.therdView}>
          <Text> {item.count != 0 ? item.time : null}</Text>
          <Text>
          {item.count != 0 ? item.count : null}
          </Text>
        </View>
      </TouchableOpacity>
    );
    return chatItemUi;
  }
}

export default ChatHome;
