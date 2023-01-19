import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/style';

const SubmitBtn = ({style, onPress, title, disabled}) => {
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

export default SubmitBtn;
