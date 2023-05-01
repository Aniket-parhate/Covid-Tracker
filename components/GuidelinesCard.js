import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const GuidelinesCard = props => {
  return (
    <ScrollView>
      <View
        style={{
          borderRadius: 10,
          backgroundColor: '#ffff',
          height: 200,
          width: 370,
          margin: 17,
          padding: 18,
          marginBottom: 1,
        }}>
        <View
          style={{
            backgroundColor: '#00a7de',
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
          }}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 9,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {props.cardNumber}
          </Text>
        </View>
        <Text style={{marginTop: 10, fontSize: 15, fontWeight: 'bold'}}>
          {props.title}
        </Text>
        <Text style={{marginTop: 5}}>{props.description}</Text>
      </View>
    </ScrollView>
  );
};

export default GuidelinesCard;

const styles = StyleSheet.create({});
