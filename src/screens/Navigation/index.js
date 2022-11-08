import * as React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from '../../navigation/BottomTabs';
import Products from '../Products';
import Details from '../Products/PetDetails';
import Map from '../../maps/MapEx';

const Stack = createNativeStackNavigator();

const MyNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                animation: 'slide_from_bottom'
            }}
        >
            <Stack.Screen
                name='Main'
                component={BottomTabs}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Products'
                component={Products}
                options={{
                    headerStyle: { backgroundColor: 'salmon' }
                }}
            />
            <Stack.Screen
                name='Details'
                component={Details}
                options={{
                    headerStyle:{ backgroundColor: 'salmon'}
                }}
            />
            <Stack.Screen
                name='Map'
                component={Map}
                options={{
                    headerStyle:{ backgroundColor: 'salmon'}
                }}
            />
        </Stack.Navigator>
    );
}

export default MyNavigation;