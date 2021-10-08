import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../screens/Register';
import Login from '../screens/Login';
import SecondScreen from '../screens/SecondScreen';

const Stack = createStackNavigator();


export default function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
           
        </Stack.Navigator>
    );
}