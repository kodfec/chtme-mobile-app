import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './pages/Home';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MenuHome from './pages/Home';
import Contact from './pages/Contact';
import Msg from './pages/Msg';

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
        <Stack.Screen
          name=" "
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Registration"
          component={MenuHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Contact"
          component={Contact}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Msg"
          component={Msg}
          options={{headerShown: false}}
        />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
