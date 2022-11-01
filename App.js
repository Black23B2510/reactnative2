// In App.js in a new project

import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './src/navigation/BottomTabs';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <BottomTabs/>
  </NavigationContainer>

);


export default App;