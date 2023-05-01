import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from '../components/Tabs';

const HomeScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Tabs />
    </NavigationContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
