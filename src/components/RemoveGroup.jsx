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
import Loader from './Loader';
// import Dialog, {DialogContent} from 'react-native-popup-dialog';

const RemoveGroup = () => {
  const {removeGroup, getAllGroups, popUp, groups, loader} = useContextData();
  const [toDelete, setToDelete] = useState(false);
  const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   getAllGroups();
  // }, []);

  const GroupRenderd = ({groupName, id}) => (
    <TouchableOpacity
      key={id}
      style={styles.bigButton}
      onPress={() => {
        // popUp(
        //   strings.popUpDeleteGroupWarning,
        //   setToDelete(true),
        //   setToDelete(false),
        // );
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
      {loader ? <Loader /> : null}
    </>
  );
};

export default RemoveGroup;
