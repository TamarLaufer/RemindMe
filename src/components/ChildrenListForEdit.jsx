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
    setCurrentScreen,
    switchScreens,
    image,
  } = useContextData();

  useEffect(() => {
    popUp(strings.chooseChildToEdit);
  }, []);

  const OneButton = ({child}) => (
    <TouchableOpacity
      key={child._id}
      style={styles.activeButton}
      onPress={() => {
        updateChosenChild(child);
        setCurrentScreen(switchScreens.EDIT_CHILD);
      }}>
      <Text style={styles.childName}>
        {child.firstName} {child.lastName}
      </Text>
    </TouchableOpacity>
  );

  const renderChild = ({item}) => <OneButton child={item} />;

  return (
    <View style={styles.modalContainer}>
      <FlatList
        numColumns={4}
        key={4}
        data={childrenList}
        renderItem={renderChild}
      />
    </View>
  );
};

export default ChildrenListForEdit;
