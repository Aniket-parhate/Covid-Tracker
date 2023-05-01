import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import OnBoardingScreen from './Screens/OnBoardingScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import {AsyncStorage} from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="onBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
      <StatusBar hidden={true} />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
