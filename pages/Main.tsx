import React, {useEffect} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import style from '../CSS/Splash';

function Main({navigation}) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Registration');
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const ui = (
    <SafeAreaView style={style.Main}>
      <Image source={require('../Images/icon.png')} style={style.icon} />
      <Text style={style.chatme}>ChatMe</Text>
      <View style={style.fromViwe}>
        <Text style={style.from}>From</Text>
        <Text style={style.virul}>virul.n</Text>
      </View>
    </SafeAreaView>
  );

  return ui;
}

export default Main;
