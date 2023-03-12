import {SafeAreaView, Text, View} from 'react-native';
import style from '../CSS/ChatHome';

function ChatHome({navigation}) {
  const ui = (
    <SafeAreaView style={style.Main}>
        <View >
        <Text>Home</Text>
        </View>
    </SafeAreaView>
  );

  return ui;
}

export default ChatHome;
