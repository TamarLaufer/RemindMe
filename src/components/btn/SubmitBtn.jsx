import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/style';

const SubmitBtn = props => {
  const {style, onPress, title, disabled} = props;
  return (
    <TouchableOpacity
      style={[styles.bigButtonFormik, disabled && styles.bigButtonFormikNotActive, style]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.bigName}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SubmitBtn;
