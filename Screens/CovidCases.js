import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const CovidCases = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch('https://data.covid19india.org/data.json');
      const data = await res.json();
      console.log(data.statewise[0]);
      setData(data.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <View style={{width: '100%', height: 50, backgroundColor: '#f0efefc4'}}>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 14,
            fontSize: 17,
            color: 'green',
          }}>
          Covid19
        </Text>
      </View>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            textAlign: 'center',
            marginBottom: 2,
            marginTop: 20,
            color: '#ee8f00',
          }}>
          COVID 19 CORONA VIRUS TRACKER
        </Text>
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            textAlign: 'center',
            marginBottom: 30,
            marginTop: 10,
            color: '#00b1f1',
          }}>
          INDIA COVID STATUS
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <View
            style={{
              height: responsiveHeight(15),
              width: responsiveWidth(46),
              padding: 20,
              backgroundColor: '#2271d19c',
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.3),
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#2271d1ff',
                textShadowColor: 'rgba(0, 0, 0, 0.756)',
                textShadowOffset: {width: 1, height: 2},
                textShadowRadius: 8,
                marginBottom: 5,
              }}>
              Country
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(3),
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#2271d1ff',
                textShadowColor: 'rgba(0, 0, 0, 0.756)',
                textShadowOffset: {width: -1, height: 2},
                textShadowRadius: 10,
              }}>
              INDIA
            </Text>
          </View>

          <View
            style={{
              height: responsiveHeight(15),
              width: responsiveWidth(47),
              padding: 20,
              backgroundColor: '#3dbecc8d',
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.3),
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#3dbeccff',
                textShadowColor: 'rgba(0, 0, 0, 0.756)',
                textShadowOffset: {width: 1, height: 2},
                textShadowRadius: 10,
                marginBottom: 5,
              }}>
              Recovered
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(3),
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#3dbeccff',
                textShadowColor: 'rgba(0, 0, 0, 0.756)',
                textShadowOffset: {width: -1, height: 2},
                textShadowRadius: 10,
              }}>
              {data.recovered}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <View
            style={{
              height: responsiveHeight(15),
              width: responsiveWidth(46),
              padding: 20,
              backgroundColor: '#d0b40094',
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.3),
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#d0b400ff',
                textShadowColor: 'rgba(0, 0, 0, 0.756)',
                textShadowOffset: {width: 2, height: 2},
                textShadowRadius: 10,
                marginBottom: 5,
              }}>
              Confirmed
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(3),
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#d0b400ff',
                textShadowColor: 'rgba(0, 0, 0, 0.756)',
                textShadowOffset: {width: -1, height: 2},
                textShadowRadius: 10,
              }}>
              {data.confirmed}
            </Text>
          </View>

          <View
            style={{
              height: responsiveHeight(15),
              width: responsiveWidth(47),
              padding: 20,
              backgroundColor: '#e28f008e',
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.3),
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#e28f00da',
                textShadowColor: 'rgba(0, 0, 0, 0.756)',
                textShadowOffset: {width: 2, height: 1},
                textShadowRadius: 10,
                marginBottom: 5,
              }}>
              Deaths
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(3),
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#e28f00f9',
                textShadowColor: 'rgba(0, 0, 0, 0.756)',
                textShadowOffset: {width: -1, height: 2},
                textShadowRadius: 10,
              }}>
              {data.deaths}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <View
            style={{
              height: responsiveHeight(15),
              width: responsiveWidth(46),
              padding: 20,
              backgroundColor: '#f83e3e7b',
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.4),
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#f83e3ecd',
                textShadowColor: 'rgba(0, 0, 0, 0.756)',
                textShadowOffset: {width: -1, height: 1},
                textShadowRadius: 10,
                marginBottom: 5,
              }}>
              Active
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(3),
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#f83e3ee9',
                textShadowColor: 'rgba(0, 0, 0, 0.756)',
                textShadowOffset: {width: -1, height: 2},
                textShadowRadius: 10,
              }}>
              {data.active}
            </Text>
          </View>

          <View
            style={{
              height: responsiveHeight(15),
              width: responsiveWidth(47),
              padding: 20,
              backgroundColor: '#5c516942',
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.3),
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#70568eff',
                textShadowColor: 'rgba(0, 0, 0, 0.756)',
                textShadowOffset: {width: 1, height: 1},
                textShadowRadius: 10,
                marginBottom: 5,
              }}>
              Updated
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(2.6),
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#b288e2ff',
                textShadowColor: 'rgba(0, 0, 0, 0.756)',
                textShadowOffset: {width: -1, height: -1},
                textShadowRadius: 4,
              }}>
              {data.lastupdatedtime}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: responsiveFontSize(2.5),
            fontWeight: 'bold',
            color: '#00e50f',
            textAlign: 'center',
            marginTop: 10,
          }}>
          STAY HOME! STAY SAFE!
        </Text>
        <StatusBar
          barStyle={'dark-content'}
          hidden={false}
          backgroundColor={'transparent'}
        />
      </View>
    </>
  );
};

export default CovidCases;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffffb3',
  },
});
