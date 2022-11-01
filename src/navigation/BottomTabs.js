import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

function BottomTabs () {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#e91e63"
    labelStyle={{fontSize: 12}}
    style={{backgroundColor: 'tomato'}}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <Image
            source={require('../../images/home.png')}
            style={{width: 26, height: 26, tintColor: color}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={Notification}
      options={{
        tabBarLabel: 'Notifycation',
        tabBarIcon: ({color, size}) => (
          <Image
            source={require('../../images/notifycation.png')}
            style={{width: 26, height: 26, tintColor: color}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color, size}) => (
          <Image
            source={require('../../images/profile.png')}
            style={{width: 26, height: 26, tintColor: color}}
          />
        ),
      }}
    />
  </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  icon: {width: 30, height: 30},
});
