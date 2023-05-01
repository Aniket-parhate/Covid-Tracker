import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import GuidelinesCard from '../components/GuidelinesCard';

const Guidlines = () => {
  return (
    <ScrollView>
      <Image
        source={require('../src/images/guidelines.png')}
        style={{
          width: '100%',
          height: 200,
          resizeMode: 'stretch',
          backgroundColor: 'white',
          marginBottom: 20,
        }}
      />
      <Text
        style={{
          color: '#333333',
          marginLeft: 15,
          fontSize: 17,
          fontWeight: 'bold',
        }}>
        Follow These
      </Text>
      <GuidelinesCard
        cardNumber={1}
        title={'Maintain Social Distance'}
        description={
          'Small but important step can slow spread of Covid 19 avoid group of people and maintain 6 feet way from others'
        }
      />
      <GuidelinesCard
        cardNumber={2}
        title={'Wash your hands'}
        description={
          'Small but important step can slow spread of Covid 19 avoid group of people and maintain 6 feet way from others'
        }
      />
      <GuidelinesCard
        cardNumber={3}
        title={'Wear mask'}
        description={
          'Small but important step can slow spread of Covid 19 avoid group of people and maintain 6 feet way from others'
        }
      />
    </ScrollView>
  );
};

export default Guidlines;

const styles = StyleSheet.create({});
