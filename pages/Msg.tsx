import {
  Alert,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import style from '../CSS/MsgCss';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Msg({route, navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const maxMsgWidth = 0.7 * windowWidth;
  const [data, setData] = useState([]);
  const [message, setmessage] = useState('heloo mello mass melao');
  const Left = <Icon name="left" size={20} style={{color: '#0008'}} />;
  const Check = (
    <Icon2
      name="checkmark"
      size={14}
      style={{color: '#0008', start: 8, marginRight: 0}}
    />
  );
  const Check2 = (
    <Icon2
      name="checkmark"
      size={14}
      style={{color: '#0008', marginRight: 0}}
    />
  );

  async function sendRequest() {
    const userJSON = await AsyncStorage.getItem('user');
    var userJS = JSON.parse(userJSON);
    var form = new FormData();
    form.append('from_user_id', userJS.id);
    form.append('to_user_id', route.params.id);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        // console.log("response",xhttp.responseText);
        var jsresponse = JSON.parse(xhttp.responseText);
        setData(jsresponse);
      }
    };
    xhttp.open('POST', 'http://10.0.2.2/viva_react_cht/msgLoad.php', true);
    xhttp.send(form);
  }

  function start() {
    setInterval(sendRequest, 100);
  }

  useEffect(start, []);

  return (
    <SafeAreaView style={style.body}>
      <View style={style.Main}>
        <TouchableOpacity
          style={style.backView}
          onPress={() => {
            navigation.navigate('Contact');
          }}>
          {Left}
          <Image
            source={{
              uri: 'http://10.0.2.2/viva_react_cht/' + route.params.url,
            }}
            style={style.image}
          />
        </TouchableOpacity>
        <Pressable style={style.nameView}>
          <Text style={style.name}>{route.params.name}</Text>
        </Pressable>
      </View>

      <View style={{flex: 1}}>
        <FlatList renderItem={FlatListItemUi} data={data} />
      </View>
      <View style={style.sendingAreaContainer}>
        <View style={style.inputContainer}>
          <TextInput
            placeholder="Type your message here"
            style={style.textInput}
            multiline={true}
          />
        </View>
        <TouchableOpacity style={style.sendButton}>
          <Icon2 name="ios-send" size={15} style={{color: '#0008'}} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

  function FlatListItemUi({item}) {
    return (
      <View
        style={
          item.side == 'Left'
            ? [style.msgViewLeft, {maxWidth: maxMsgWidth}]
            : [style.msgViewRight, {maxWidth: maxMsgWidth}]
        }>
        <Text lineBreakMode="head" numberOfLines={200} style={style.msgtext}>
          {item.msg}
        </Text>
        <View style={style.timeView}>
          <Text style={style.timeText}>{item.time}</Text>
          <View style={{flexDirection: 'row'}}>
            {item.side == 'Right' && item.status == 3 ? Check : null}
            {item.side == 'Right' ? Check2 : null}
          </View>
        </View>
      </View>
    );
  }
}
