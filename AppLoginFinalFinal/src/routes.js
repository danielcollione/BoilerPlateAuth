import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './pages/signIn/signIn';
import SignUp from './pages/signUp/signUp';
import Main from './pages/main/main';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'SignIn'}>
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
          name="Main" 
          component={Main}
          options={{headerStyle: {
            backgroundColor: '#FC6663'},
            headerTintColor: '#fff'
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
