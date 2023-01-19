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
import {styles} from '../styles/style';
import {strings} from '../utils/Strings';

const GroupsForEditOrRemoveChild = () => {
  const {
    groups,
    updateCurrentScreen,
    switchScreens,
    getAllChildrenByGroup,
    mode,
  } = useContextData();

  const OneButtonForEdit = ({group}) => (
    <TouchableOpacity
      key={group._id}
      style={styles.bigButton}
      onPress={() => {
        if (mode === 'edit') {
          getAllChildrenByGroup(group._id);
          updateCurrentScreen(switchScreens.EDIT_CHILD_LIST, true);
        } else if (mode === 'remove') {
          getAllChildrenByGroup(group._id);
          updateCurrentScreen(switchScreens.REMOVE_CHILD, true);
        }
      }}>
      <Text style={styles.bigName}>{group.groupName}</Text>
    </TouchableOpacity>
  );

  const renderGroup = groups.map((group, index) => {
    return <OneButtonForEdit group={group} key={index} />;
  });

  return (
    <>
      <Text style={styles.header}>{strings.chooseGroup}</Text>
      <View style={styles.modalContainer}>{renderGroup}</View>
    </>
  );
};

export default GroupsForEditOrRemoveChild;
