import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CovidCases from '../Screens/CovidCases';
import Guidlines from '../Screens/Guidlines';
import Statewise from '../Screens/Statewise';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{showLabel: false}}
      screenOptions={{
        headerShown: false,
        tabBarshowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: 'white',
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="CovidCases"
        component={CovidCases}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../src/images/home.png')}
                style={{width: 25, height: 25, marginLeft: 5}}
              />
              <Text style={{marginTop: 3, color: focused ? '#0a6700' : '#000'}}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Statewise"
        component={Statewise}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../src/images/statewise.png')}
                style={{width: 25, height: 25, marginLeft: 15}}
              />
              <Text style={{marginTop: 3, color: focused ? '#0a6700' : '#000'}}>
                Statewise
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Guidlines"
        component={Guidlines}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../src/images/guidelines-logo.png')}
                style={{width: 25, height: 25, marginLeft: 15}}
              />
              <Text
                style={{
                  marginTop: 3,
                  color: focused ? '#0a6700' : '#000',
                }}>
                Guidlines
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
