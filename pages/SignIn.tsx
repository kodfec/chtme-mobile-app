import {SafeAreaView, Text, TextInput, View} from 'react-native';
import style from '../CSS/SignInCSS';
import {Shadow} from 'react-native-shadow-2';
import IconUser from 'react-native-vector-icons/Entypo';

function SignIn({navigation}) {
  const ui = (
    <SafeAreaView style={style.Body}>
        <Text style={style.chtme}>ChatMe</Text>
      <Shadow
        distance={15}
        startColor={'#00000010'}
        containerViewStyle={{marginVertical: 20}}
        radius={8}>
        <View style={style.signInbox}>
          <Text style={style.signIn}>SIGN IN</Text>
          <View style={style.signInView1}>
          <IconUser style={style.signInIcon1} name="user" />
          <TextInput
            style={style.signInInput1}
            keyboardType={'numeric'}
            maxLength={10}
            placeholder="Your Mobile"
          />
        </View>
        <View style={style.signInView1}>
          <IconUser style={style.signInIcon1} name="lock" />
          <TextInput
            style={style.signInInput1}
            maxLength={20}
            placeholder="Your Password"
            secureTextEntry={true}
          />
        </View>
        </View>
      </Shadow>
    </SafeAreaView>
  );
  return ui;
}

export default SignIn;
