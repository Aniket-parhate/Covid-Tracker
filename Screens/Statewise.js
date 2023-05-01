import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';

const Statewise = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch('https://data.covid19india.org/data.json');
      const data = await res.json();
      console.log(data.statewise);
      setData(data.statewise);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <ScrollView style={{backgroundColor: '#fff', padding: 10}}>
      <View style={{flexDirection: 'row', padding: 5}}>
        <View style={{flexDirection: 'column'}}>
          <Text style={{color: '#000000', marginBottom: 7}}>states</Text>
        </View>
        <View style={{flexDirection: 'column', marginLeft: 130}}>
          <Text style={{color: '#000000', marginBottom: 7}}>confirmed</Text>
        </View>
        <View style={{flexDirection: 'column', marginLeft: 15}}>
          <Text style={{color: '#000000', marginBottom: 7}}>recovered</Text>
        </View>
        <View style={{flexDirection: 'column', marginLeft: 15}}>
          <Text style={{color: '#000000', marginBottom: 7}}>deaths</Text>
        </View>
      </View>
      <ScrollView horizontal>
        <View
          style={{
            flexDirection: 'row',

            padding: 5,
          }}>
          <View style={{flexDirection: 'column', width: 160}}>
            {data.map((curElem, index) => {
              return (
                <Text style={{color: '#000000', marginBottom: 7}}>
                  {curElem.state}
                </Text>
              );
            })}
          </View>
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            {data.map((curElem, index) => {
              return (
                <Text style={{color: '#000000', marginBottom: 7}}>
                  {curElem.confirmed}
                </Text>
              );
            })}
          </View>
          <View style={{flexDirection: 'column', marginLeft: 12}}>
            {data.map((curElem, index) => {
              return (
                <Text style={{color: '#000000', marginBottom: 7}}>
                  {curElem.recovered}
                </Text>
              );
            })}
          </View>
          <View style={{flexDirection: 'column', marginLeft: 12}}>
            {data.map((curElem, index) => {
              return (
                <Text style={{color: '#000000', marginBottom: 7}}>
                  {curElem.deaths}
                </Text>
              );
            })}
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginBottom: 150,
              marginLeft: 10,
            }}>
            {data.map((curElem, index) => {
              return (
                <Text style={{color: 'white', marginBottom: 7}}>
                  {curElem.active}
                </Text>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default Statewise;

const styles = StyleSheet.create({});
