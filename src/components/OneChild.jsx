import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useContextData} from '../Context/ContextData';
import {strings} from '../utils/Strings';
import sizes from '../utils/sizes';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {styles} from '../styles/style';


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
