import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './welcome';
import SignInScreen from './signin';
import SignUpScreen from './signup';
import MainTabScreen from './Mainbottomtab'
const RootStack = createStackNavigator();

const RootStackScreen = () => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="MainTabScreen" component={MainTabScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;