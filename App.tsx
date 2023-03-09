import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
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
          headerStyle: {backgroundColor: '#000080'},
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name=" " component={Main}  options={{ headerShown: false }} />
        <Stack.Screen name="Registration" component={Home}  options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn}  options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
