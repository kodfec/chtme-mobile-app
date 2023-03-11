import {Alert, Image, SafeAreaView, Text, TextInput, View} from 'react-native';
import style from '../CSS/SignInCSS';
import {Shadow} from 'react-native-shadow-2';
import IconUser from 'react-native-vector-icons/Entypo';
import {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SignIn({navigation}) {
  const User = <IconUser name="user" size={18} color="#0008" />;
  const adduser = <IconUser name="add-user" size={18} color="#0008" />;
  const [showAlert, setShowAlert] = useState(false);
  const [signInPressed, setSignInPressed] = useState(false);
  const [signUpPressed, setSignUpPressed] = useState(false);
  const [validmsg, setValidMsg] = useState('');
  const [msgTitle, setMsgTitle] = useState('');
  const [conformBtn, setConformBtn] = useState('');
  const [conformBtnColor, setConformBtnColor] = useState('');
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
  const [mobile, setmobile] = useState(null);
  const [Password, setPassword] = useState('');

  const ui = (
    <SafeAreaView style={style.Body}>
      <Text style={style.chtme}>ChatMe</Text>
      <Image source={require('../Images/icon.png')} style={style.icon} />
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
          <AwesomeAlert
            show={showAlert}
            title={msgTitle}
            message={validmsg}
            showConfirmButton={true}
            confirmText={conformBtn}
            confirmButtonColor={conformBtnColor}
            onConfirmPressed={() => setShowAlert(false)}
            titleStyle={{
              fontWeight: 'bold',
            }}
            contentContainerStyle={{
              width: '67%',
            }}
            confirmButtonStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '30%',
            }}
          />
          <TouchableWithoutFeedback
            onPress={() => {
              setShowAlert(!showAlert);
              if (mobile == '') {
                setMsgTitle('Warning !');
                setValidMsg('Type Your Mobile First');
                setConformBtn('Retry');
                setConformBtnColor('#ff3c38');
              } else if (Password == '') {
                setMsgTitle('Warning !');
                setValidMsg('Type Your Password');
                setConformBtn('Retry');
                setConformBtnColor('#ff3c38');
              } else {
                var form = new FormData();
                form.append('mobile', mobile);
                form.append('password', Password);
                setShowAlert(false);
                function gotomain(){
                  navigation.navigate('Home');
                }
                var xhttps = new XMLHttpRequest();
                xhttps.onreadystatechange = async () => {
                  if (xhttps.readyState == 4 && xhttps.status == 200) {
                    // Alert.alert("Response",xhttps.responseText)
                    var jsobj = JSON.parse(xhttps.response);
                    var user = jsobj.user;
                    var storeData = JSON.stringify(user);
                    await AsyncStorage.setItem('user', storeData);
                    setShowAlert(!showAlert);
                    setMsgTitle(jsobj.titel);
                    setValidMsg(jsobj.msg);
                    setConformBtn(jsobj.btn);
                    setConformBtnColor(jsobj.color);
                    setInterval(gotomain,2000)
                  }
                };
                xhttps.open(
                  'POST',
                  'http://10.0.2.2/viva_react_cht/login.php',
                  true,
                );
                xhttps.send(form);
              }
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
            onPress={() => {
              navigation.navigate('SignUp');
            }}
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

  function sendRequest() {}
  return ui;
}

export default SignIn;
