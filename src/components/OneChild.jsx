import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useContextData} from '../Context/ContextData';
import {styles} from '../styles/style';

const OneChild = ({firstName, lastName, id}) => {
  const [arrived, setArrived] = useState(false);
  const {updateChild} = useContextData();

  const isChildArrived = () => {
    setArrived(!arrived);
  };
  return (
    <TouchableOpacity
      key={id}
      style={arrived ? styles.notActiveButton : styles.activeButton}
      onPress={() => {
        isChildArrived();
        updateChild(id, {isArrived: isChildArrived});
      }}>
      <Text style={styles.childName}>
        {firstName} {lastName}
      </Text>
    </TouchableOpacity>
  );
};

export default OneChild;
