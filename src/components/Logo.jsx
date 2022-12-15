import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Logo = () => {
  return (
    <Image style={styles.image} source={require('../utils/remindMe1.png')} />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 230,
    height: 100,
    marginLeft: 5,
    marginBottom: 15,
  },
});

export default Logo;
