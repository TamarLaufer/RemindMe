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
  const {removeGroup, groups} = useContextData();
  const [toDelete, setToDelete] = useState(false);
  const [visible, setVisible] = useState(true);

  const GroupRenderd = ({groupName, id}) => (
    <TouchableOpacity
      key={id}
      style={styles.bigButton}
      onPress={() => {
        removeGroup(id);
        setVisible(false);
      }}>
      <Text style={styles.bigName}>{groupName}</Text>
    </TouchableOpacity>
  );

  const renderGroupForRemove = groups.map((group, index) => {
    return (
      <GroupRenderd groupName={group.groupName} id={group._id} key={index} />
    );
  });

  return (
    <>
      <Text style={styles.header}>{strings.chooseGroupToRemove}</Text>
      <View style={styles.modalContainer}>{renderGroupForRemove}</View>
    </>
  );
};

export default RemoveGroup;
