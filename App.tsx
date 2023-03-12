import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Header from './components/Header';
import ChatHome from './pages/ChatHome';
import Home from './pages/Home';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Stack = createNativeStackNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main Page"
        screenOptions={{
          headerStyle: {backgroundColor: '#EDF1D6'},
          headerTintColor: '#EDF1D6',
        }}>
        <Stack.Screen name=" " component={Main}  options={{ headerShown: false }} />
        <Stack.Screen name="Registration" component={Home}  options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn}  options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp}  options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={ChatHome}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Header;
