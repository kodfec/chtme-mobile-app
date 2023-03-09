import React, {useEffect} from 'react';
import {Image, SafeAreaView, Text} from 'react-native';
import style from '../CSS/Main.js';

function Main({navigation}) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Registration');
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const ui = (
    <SafeAreaView style={style.Main}>
    </SafeAreaView>
  );

  return ui;
}

export default Main;
