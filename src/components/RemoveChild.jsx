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

const RemoveChild = () => {
  const {childrenList, removeChild, popUp} = useContextData();

  useEffect(() => {
    popUp(strings.chooseChildToRemove);
  }, []);

  const renderChildren = ({item}) => (
    <ChildrenRenderd
      firstName={item.firstName}
      lastName={item.lastName}
      id={item._id}
    />
  );

  const ChildrenRenderd = ({firstName, lastName, id}) => (
    <TouchableOpacity
      key={id}
      style={styles.activeButton}
      onPress={() => {
        removeChild(id);
      }}>
      <Text style={styles.childName}>
        {firstName} {lastName}
      </Text>
    </TouchableOpacity>
  );

  return (
    // {/* Need to render the right age-group */}
    <View style={styles.container}>
      <FlatList
        numColumns={4}
        key={4}
        data={childrenList}
        renderItem={renderChildren}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default RemoveChild;
