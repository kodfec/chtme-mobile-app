import {Alert, Image, Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import style from '../CSS/SignInCSS';
import {Shadow} from 'react-native-shadow-2';
import IconUser from 'react-native-vector-icons/Entypo';
import {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import { useIsFocused } from '@react-navigation/native';


function SignIn({navigation}) {
  const User = <IconUser name="user" size={18} color="#0008" />;
  const adduser = <IconUser name='add-user' size={18} color="#0008"/>;
  const [signInPressed, setSignInPressed] = useState(false);
  const [signUpPressed, setSignUpPressed] = useState(false);
  const handleSignInPressIn = () => {
    setSignInPressed(true);
  };

  const handleSignInPressOut = () => {
    setSignInPressed(false);
  };

  const handleSignUpPressIn = () => {
    setSignUpPressed(true);
  };

  const handleSignUpPressOut = () => {
    setSignUpPressed(false);
  };
  const [mobile,setmobile] = useState('');
  const [Password,setPassword] = useState('')

  const ui = (
    <SafeAreaView style={style.Body}>
      <Text style={style.chtme}>ChatMe</Text>
      <Image source={require('../Images/icon.png')} style={style.icon}/>
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
              onChangeText={setmobile}
            />
          </View>
          <View style={style.signInView2}>
            <IconUser style={style.signInIcon1} name="lock" />
            <TextInput
              style={style.signInInput1}
              maxLength={20}
              placeholder="Your Password"
              secureTextEntry={true}
              onChangeText={setPassword}
            />
          </View>
          <TouchableWithoutFeedback
            onPress={()=>{
              Alert.alert(mobile);
              // Alert.alert(Password);
              var form = new FormData();
              form.append("mobile",mobile);
              form.append("password",Password);
          
            }}
            onPressIn={handleSignInPressIn}
            onPressOut={handleSignInPressOut}>
            <View
              style={[
                style.signInbtn,
                signInPressed && {backgroundColor: '#ccc'},
              ]}>
              <Text style={style.signInbtntext}>{User} sign In</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => console.log('signUp')}
            onPressIn={handleSignUpPressIn}
            onPressOut={handleSignUpPressOut}>
            <View
              style={[
                style.signUpbtn,
                signUpPressed && {backgroundColor: '#ccc'},
              ]}>
              <Text style={style.signUpbtntext}>{adduser} sign Up</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Shadow>
      <Text>Develope by Virul.n</Text>

    </SafeAreaView>
  );
  return ui;

  
}

export default SignIn;
