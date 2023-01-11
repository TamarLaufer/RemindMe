import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useContextData} from '../Context/ContextData';
import {styles} from '../styles/style';
import {strings} from '../utils/Strings';

const OneChild = ({firstName, lastName, id, isArrived}) => {
  const [arrived, setArrived] = useState(isArrived);
  const {updateChildIfArrived} = useContextData();

  const isChildArrived = () => {
    setArrived(!arrived);
  };

  return (
    <TouchableOpacity
      key={id}
      style={arrived ? styles.notActiveButton : styles.activeButton}
      onPress={() => {
        isChildArrived();
        updateChildIfArrived(id, !isArrived);
      }}>
      <Text style={styles.childName}>
        {firstName} {lastName}
      </Text>
      {arrived ? (
        <Text style={styles.childArrived}>{strings.arrived}</Text>
      ) : null}
    </TouchableOpacity>
  );
};

export default OneChild;
