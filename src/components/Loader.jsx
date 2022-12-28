import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {styles} from '../styles/style';

const Loader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.centeredViewLoader]}>
      <LottieView
        source={require('../assets/99571-loader-colors.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loader;
