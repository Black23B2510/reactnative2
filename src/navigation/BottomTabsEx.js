import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';

const BottomTabs = createBottomTabNavigator();

const BottomNav = () => {
    return(
        <BottomTabs.Navigator
            initialRouteName='Home' //Screen đc load đầu tiên
            sceneContainerStyle = {{backgroundColor: 'green'}} // set style cho các screen trong navigator
            screenOptions={{ // lựa chọn mặc định cho các screen trong navigator
                tabBarActiveTintColor: 'green', // active màu của tabBar
                tabBarActiveBackgroundColor: 'black' //background của tabBar
            }}>
            <BottomTabs.Screen
                name='Home'
                component={Home}
                options={{ // chỉ ra các thuộc tính của tabBar
                    tabBarLabel: ({focused}) =>{
                        return(
                            <Text style={{ color: focused ? 'red' : 'black'}}>Home</Text>
                        );
                    },
                    tabBarIcon: () =>{
                        <Image
                        source={require('../../images/home.png')}
                        style= {{width: 26, height: 26, tintColor: color}}
                        />
                    }
                }}
            />
            <BottomTabs.Screen
                name='Profile'
                component={Profile}
                options={{ // chỉ ra các thuộc tính của tabBar
                    tabBarLabel: 'Profile',
                    tabBarIcon: () =>{
                        <Image
                        source={require('../../images/home.png')}
                        style= {{width: 26, height: 26, tintColor: color}}
                        />
                    }
                }}
            />
        </BottomTabs.Navigator>
    );
}

export default BottomNav;