import {
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
import {useState} from 'react';
import {Dimensions} from 'react-native';

export default function Msg({route, navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const maxMsgWidth = 0.5 * windowWidth;
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 33, 40]);
  const [message, setmessage] = useState('hehrhrhhrhrhrhrhrhrhhrhrhrhlo');
  const Left = <Icon name="left" size={20} style={{color: '#0008'}} />;
  const Send = <Icon2 name='ios-send' size={10} style={{color: '#0008'}} />
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
        <Icon2 name='ios-send' size={15} style={{color: '#0008'}} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

  function FlatListItemUi() {
    return (
      <View style={[style.msgViewLeft, {maxWidth: maxMsgWidth}]}>
        <Text lineBreakMode="head" numberOfLines={200} style={style.msgtext}>
          {message}
        </Text>
        <View style={style.timeView}>
          <Text style={style.timeText}>9.46AM</Text>
        </View>
      </View>
    );
  }
}
