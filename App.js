import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './src/screens/RootStackScreen'
// import {createDrawerNavigator} from '@react-navigation/drawer';
// const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <RootStackScreen />
    </NavigationContainer>
  );
};

export default App;
