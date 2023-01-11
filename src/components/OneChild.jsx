import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useContextData} from '../Context/ContextData';
import {strings} from '../utils/Strings';
import sizes from '../utils/sizes';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

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

const styles = StyleSheet.create({
  activeButton: {
    width: sizes.PageWidth * 0.15,
    height: sizes.PageHieght * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#83A3C2',
    margin: '1.5%',
    padding: 1,
    shadowOpacity: 0.8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: -4},
    shadowRadius: 3,
  },
  notActiveButton: {
    width: sizes.PageWidth * 0.15,
    height: sizes.PageHieght * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: '1.5%',
    shadowOpacity: 0.8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: -4},
    shadowRadius: 3,
    backgroundColor: '#fff',
    borderColor: '#83A3C2',
    color: 'black',
  },
  childName: {
    fontSize: RFValue(9, sizes.PageHieght),
    textAlign: 'center',
    color: '#EAEAEA',
    fontFamily: 'Fredoka-Medium',
  },
  childArrived: {
    fontSize: RFValue(8, sizes.PageHieght),
    textAlign: 'center',
    color: '#3F4E4F',
    fontFamily: 'Fredoka-Medium',
  },
});

export default OneChild;
