import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/navigation/Index';
import HomeScreen from './src/screens/HomeScreen';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import Register from './src/screens/Register';
import SecondScreen from './src/screens/SecondScreen';




export default function App() {
  return <Routes></Routes>  
  return <Profile></Profile>  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
