import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import sizes from '../../utils/sizes';
import {RFValue} from 'react-native-responsive-fontsize';

const SubmitBtn = props => {
  const {style, onPress, title, disabled} = props;
  return (
    <TouchableOpacity
      style={
        disabled ? styles.bigButtonFormikNotActive : styles.bigButtonFormik
      }
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.bigName}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bigButtonFormik: {
    width: sizes.PageWidth * 0.8,
    height: sizes.PageHieght * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#83A3C2',
    shadowOpacity: 0.8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: -4},
    shadowRadius: 3,
    marginTop: sizes.PageHieght * 0.08,
    padding: sizes.PageHieght * 0.02,
  },
  bigButtonFormikNotActive: {
    backgroundColor: '#D8D8D8',
    width: sizes.PageWidth * 0.8,
    height: sizes.PageHieght * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowOpacity: 0.8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: -4},
    shadowRadius: 3,
    marginTop: sizes.PageHieght * 0.08,
    padding: sizes.PageHieght * 0.02,
  },
  bigName: {
    fontSize: RFValue(28, sizes.PageWidth),
    textAlign: 'center',
    color: '#EAEAEA',
    fontFamily: 'Fredoka-Medium',
  },
});

export default SubmitBtn;
