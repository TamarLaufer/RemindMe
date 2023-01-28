import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {styles} from '../styles/style';
import {screenNames, strings} from '../utils/Strings';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import {useContextData} from '../Context/ContextData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeSrcreen = () => {
  const navigation = useNavigation();
  const AnimationRef = useRef(null);
  const _onPress = () => {
    if (AnimationRef) {
      AnimationRef.current?.bounce();
    }
  };

  return (
    <>
      {/* <Text style={styles.header}>{strings.welcome}</Text> */}
      <View
        style={[StyleSheet.absoluteFillObject, styles.centeredViewLoaderHome]}>
        <Image
          style={styles.logoSizeHome}
          source={require('../images/remindMe1.png')}
        />
        <LottieView
          style={styles.lottieHome}
          source={require('../assets/87144-teacher-girl-woman-tapping-phone.json')}
          autoPlay
          loop
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(screenNames.register);
          }}>
          <Animatable.View
            animation="slideInDown"
            iterationCount={3}
            direction="alternate"
            style={styles.registerButton}>
            <Text style={styles.nameRegister}>{strings.enter}</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeSrcreen;
