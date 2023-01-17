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

const GroupListForEdit = () => {
  const {groups, updateCurrentScreen, switchScreens, updateChosenGroup} =
    useContextData();

  const OneButtonForEdit = ({group}) => (
    <TouchableOpacity
      key={group._id}
      style={styles.bigButton}
      onPress={() => {
        updateChosenGroup(group);
        updateCurrentScreen(switchScreens.ADD_GROUP, true);
      }}>
      <Text style={styles.bigName}>{group.groupName}</Text>
    </TouchableOpacity>
  );

  const renderGroupForEdit = groups.map((group, index) => {
    return <OneButtonForEdit group={group} key={index} />;
  });

  return (
    <>
      <Text style={styles.header}>{strings.chooseGroupToEdit}</Text>
      <View style={styles.modalContainer}>{renderGroupForEdit}</View>
    </>
  );
};

export default GroupListForEdit;
