import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Image,
  Animated,
  ActivityIndicator,
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

import { getData, storeData } from '../../utils/localStorage';
import { PermissionsAndroid } from 'react-native';

export default function Splash({ navigation }) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const scaleLogo = new Animated.Value(0.1);
  const scaleText = new Animated.Value(100);

  Animated.timing(scaleLogo, {
    toValue: 1,
    duration: 1000,
  }).start();

  Animated.timing(scaleText, {
    toValue: 0,
    duration: 1000,
  }).start();


  useEffect(() => {

    setTimeout(() => {
      navigation.replace('Home');
    }, 1500)
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.primary,
          justifyContent: 'center',
        }}>


        <View style={{
          backgroundColor: colors.white,
          marginBottom: '-5%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 10,

        }}>
          <Animated.Image
            source={require('../../assets/logo.png')}
            style={{
              resizeMode: 'contain',
              // resizeMode: 'center',
              height: 250,
              aspectRatio: scaleLogo,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            // borderTopLeftRadius: 30,
            // borderTopRightRadius: 30,
            paddingTop: 20,

            // paddingBottom: windowHeight / 4,
          }}>


          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 15,
            textAlign: 'center',
            color: colors.white,
            maxWidth: '72%',
            marginBottom: 20,
          }}>Tebarkan Kesejahteraan Dan Kedamaian Bersama</Text>
          <Animated.Image
            source={require('../../assets/putih.png')}
            style={{
              // resizeMode: 'center',
              height: 50,
              width: windowWidth / 1.3,
              marginBottom: 20,
            }}
          />

          <ActivityIndicator size="large" color={colors.white} />
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  image: {
    aspectRatio: 1,
    width: 250,
    height: 250,
  },
});
