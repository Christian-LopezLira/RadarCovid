import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import SecondScreen from '../screens/SecondScreen';
import Profile from '../screens/Profile';
import School from '../screens/School';
import AlertCovid from '../screens/AlertCovid';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='SecondScreen' component={SecondScreen} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='School' component={School} />
            <Stack.Screen name='AlertCovid' component={AlertCovid} />
        </Stack.Navigator>
    );
}