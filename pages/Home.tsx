import {useEffect, useRef} from 'react';
import {
  Alert,
  Animated,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import style from '../CSS/Main';
import IconUser from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';




const AnimatedPage = ({navigation}) => {
  async function checkuser() {
    var user = await AsyncStorage.getItem('user');
    if (user != null) {
      navigation.navigate('Home');
    }
  }
  checkuser();
    const User = <IconUser name="user" size={20} color="#000" />;
    const adduser = <IconUser name='add-user' size={20} color="#000"/>;

  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const translateYAnimation = useRef(new Animated.Value(50)).current;
  const animatedStyle = {
    opacity: opacityAnimation,
    transform: [{translateY: translateYAnimation}],
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacityAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={style.Home}>
      <Animated.View style={[style.animatedContainer, animatedStyle]}>
        <Animated.Image
          source={require('../Images/Removal-69.png')}
          style={[style.pic, animatedStyle]}
        />
        <Text style={style.chtme}>ChatMe</Text>
      </Animated.View>
      <Animated.View style={[style.pages, animatedStyle]}>
        <TouchableOpacity
          style={style.btn}
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <Text style={style.btnText}>{User} Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btn2} onPress={()=>{navigation.navigate('SignUp')}}>
          <Text style={style.btnText}>{adduser} Sign Up</Text>
        </TouchableOpacity>
        <Text style={style.virul}>Develope by Virul.n</Text>
      </Animated.View>
    </SafeAreaView>
  );
};

export default AnimatedPage;
