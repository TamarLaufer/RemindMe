import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {useContextData} from '../Context/ContextData';
import {strings, screenNames} from '../utils/Strings';
import {styles} from '../styles/style';

const ChildrenListForEdit = () => {
  const navigation = useNavigation();
  const {
    childrenList,
    popUp,
    updateChosenChild,
    updateCurrentScreen,
    switchScreens,
    image,
    getAllChildren,
  } = useContextData();

  useEffect(() => {
    getAllChildren();
  }, []);

  const OneButton = ({child}) => (
    <TouchableOpacity
      key={child._id}
      style={styles.activeButton}
      onPress={() => {
        updateChosenChild(child);
        updateCurrentScreen(switchScreens.ADD_CHILD, true);
      }}>
      <Text style={styles.childName}>
        {child.firstName} {child.lastName}
      </Text>
    </TouchableOpacity>
  );

  const renderChild = childrenList.map((child, index) => {
    return <OneButton child={child} key={index} />;
  });

  return (
    <>
      <Text style={styles.header}>{strings.chooseChildToEdit}</Text>
      <View style={styles.modalContainer}>{renderChild}</View>
    </>
  );
};

export default ChildrenListForEdit;
