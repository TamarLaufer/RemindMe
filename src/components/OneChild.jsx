import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const OneChild = ({firstName, lastName, id, onPress}, props) => {
  const [arrived, setArrived] = useState(false);
  const isArrived = () => {
    setArrived(!arrived);
    onPress(id);
  };
  return (
    <TouchableOpacity
      key={id}
      style={arrived ? styles.notActiveButton : styles.activeButton}
      onPress={isArrived}>
      <Text style={styles.name}>
        {firstName} {lastName}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  activeButton: {
    width: 225,
    height: 95,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#83A3C2',
    margin: 7,
  },
  notActiveButton: {
    width: 225,
    height: 95,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#fff',
    margin: 7,
  },
  name: {
    fontSize: 35,
    textAlign: 'center',
    color: '#EAEAEA',
  },
});

export default OneChild;
