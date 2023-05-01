import {StyleSheet, Text, View, Button, Image, StatusBar} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const OnBoardingScreen = ({navigation}) => {
  return (
    //Onboarding screens
    <Onboarding
      onSkip={() => navigation.replace('HomeScreen')}
      onDone={() => navigation.navigate('HomeScreen')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image
              source={require('../src/images/virus.png')}
              style={{height: 350, width: 350}}
            />
          ),
          title: 'Covid Cases',
          subtitle: 'Get Current Covid Cases Information',
        },
        {
          backgroundColor: '#fdeb93b6',
          image: (
            <Image
              source={require('../src/images/vaccination.png')}
              style={{height: 350, width: 350}}
            />
          ),
          title: 'Statewise',
          subtitle: 'You can se Statewise Covid Cases',
        },
        {
          backgroundColor: '#e9bcbe',
          image: (
            <Image
              source={require('../src/images/get-started.png')}
              style={{height: 350, width: 350}}
            />
          ),
          title: 'Lets Get Started',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
