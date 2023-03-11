import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import style from '../CSS/SignUp';
import {Shadow} from 'react-native-shadow-2';
import IconUser from 'react-native-vector-icons/Entypo';
import {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import SelectDropdown from 'react-native-select-dropdown';
import {launchImageLibrary} from 'react-native-image-picker';

function SignUp({navigation}) {
  const User = <IconUser name="user" size={18} color="#0008" />;
  const adduser = <IconUser name="add-user" size={18} color="#0008" />;
  const [showAlert, setShowAlert] = useState(false);
  const [signInPressed, setSignInPressed] = useState(false);
  const [signUpPressed, setSignUpPressed] = useState(false);
  const [validmsg, setValidMsg] = useState('');
  const [msgTitle, setMsgTitle] = useState('');
  const [conformBtn, setConformBtn] = useState('');
  const [conformBtnColor, setConformBtnColor] = useState('');
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

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
  const [name, Setname] = useState('');
  const [mobile, setmobile] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfromPassword, SetConformPassword] = useState('');
  const [Country, SetCountry] = useState('');
  const [ProfileImg, SetProfileImage] = useState('');

  async function openGallery() {
    const options = {
      mediaType: 'photo',
    };
    const result = await launchImageLibrary(options);
    if (result.didCancel) {
      setShowAlert(!showAlert);
      setMsgTitle('Warning !');
      setValidMsg("You didn't select Profile image");
      setConformBtn('Retry');
      setConformBtnColor('#ff3c38');
    } else {
      var image = {
        uri: result.assets[0].uri,
        name: 'profile.png',
        type: 'image/png',
      };
        SetProfileImage(image)
    }
  }

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
          <Text style={style.signIn}>Registartion</Text>
          <View style={style.signInView1}>
            <IconUser style={style.signInIcon1} name="user" />
            <TextInput
              style={style.signInInput1}
              maxLength={10}
              placeholder="Your Name"
              onChangeText={Setname}
              placeholderTextColor={'#0008'}
            />
          </View>
          <View style={style.signInView2}>
            <IconUser style={style.signInIcon1} name="mobile" />
            <TextInput
              style={style.signInInput1}
              maxLength={20}
              placeholder="Your Mobile"
              onChangeText={setmobile}
              placeholderTextColor={'#0008'}
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
              placeholderTextColor={'#0008'}
            />
          </View>
          <View style={style.signInView2}>
            <IconUser style={style.signInIcon1} name="lock-open" />
            <TextInput
              style={style.signInInput1}
              maxLength={20}
              placeholder="Confrom Your Password"
              secureTextEntry={true}
              onChangeText={SetConformPassword}
              placeholderTextColor={'#0008'}
            />
          </View>

          <View style={style.signInView2}>
            <IconUser style={style.signInIcon1} name="globe" />
            <SelectDropdown
              buttonStyle={style.dropDown}
              defaultButtonText={'Select Your Country'}
              buttonTextStyle={{
                start: 37,
                color: '#0008',
                fontSize: 15,
              }}
              data={countries}
              onSelect={(selectedItem, index) => {
                SetCountry(selectedItem);
              }}
            />
          </View>
          <View style={style.signInView2}>
            <TouchableOpacity style={style.profilebtn} onPress={openGallery}>
              <Text>Select your profile pic</Text>
            </TouchableOpacity>
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
              navigation.navigate('SignIn');
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

  return ui;
}

export default SignUp;
