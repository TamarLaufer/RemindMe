import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Logo = props => {
  return (
    <Image
      style={props.style}
      source={require('../assets/images/remindMe1.png')}
    />
  );
};

export default Logo;
