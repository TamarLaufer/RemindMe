import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  View,
  Alert,
} from 'react-native';
import {useContextData} from '../Context/ContextData';
import {strings} from '../utils/Strings';
import {styles} from '../styles/style';

const RemoveGroup = () => {
  const {groupsList, removeGroup, popUp} = useContextData();

  useEffect(() => {
    popUp(strings.chooseGroupToRemove);
  }, []);

  const GroupRenderd = ({groupName, id}) => (
    <TouchableOpacity
      key={id}
      style={styles.bigButton}
      onPress={() => {
        removeGroup(id);
      }}>
      <Text style={styles.bigName}>{groupName}</Text>
    </TouchableOpacity>
  );

  const renderGroupForRemove = ({item}) => (
    <GroupRenderd groupName={item.groupName} id={item._id} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        key={2}
        data={groupsList}
        renderItem={renderGroupForRemove}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default RemoveGroup;
