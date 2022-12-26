import React, {useEffect} from 'react';
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
  const {groupList, removeGroup, popUp} = useContextData();

  useEffect(() => {
    popUp(strings.chooseGroupToRemove);
  }, []);

  const renderGroupForRemove = ({item}) => (
    <GroupRenderd groupName={item.groupName} id={item._id} />
  );

  const GroupRenderd = ({groupName, id}) => (
    <TouchableOpacity
      key={id}
      style={styles.bigButton}
      onPress={id => {
        removeGroup(id);
      }}>
      <Text style={styles.bigName}>{groupName}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        key={2}
        data={groupList}
        renderItem={renderGroupForRemove}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default RemoveGroup;
