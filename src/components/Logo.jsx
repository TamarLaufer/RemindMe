import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {styles} from '../styles/style';

const Logo = () => {
  return (
    <Image
      style={styles.logoSize}
      source={require('../images/remindMe1.png')}
    />
  );
};

export default Logo;
