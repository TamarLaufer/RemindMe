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
  const navigation = useNavigation();
  const {
    groups,
    popUp,
    updateCurrentScreen,
    switchScreens,
    updateChosenGroup,
    getAllGroups,
  } = useContextData();

  const OneButtonForEdit = ({group}) => (
    <TouchableOpacity
      key={group._id}
      style={styles.bigButton}
      onPress={() => {
        updateChosenGroup(group);
        updateCurrentScreen(switchScreens.EDIT_GROUP);
      }}>
      <Text style={styles.bigName}>{group.groupName}</Text>
    </TouchableOpacity>
  );

  const renderGroupForEdit = ({item}) => <OneButtonForEdit group={item} />;

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.header}>{strings.chooseGroupToEdit}</Text>
      <FlatList
        numColumns={2}
        key={2}
        data={groups}
        renderItem={renderGroupForEdit}
      />
    </View>
  );
};

export default GroupListForEdit;
