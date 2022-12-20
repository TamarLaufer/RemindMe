import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Button,
  SafeAreaView,
} from 'react-native';
import {useContextData} from '../Context/ContextData';
import OneChild from './OneChild';

const AllChildrenList = props => {
  const {onPress} = props;
  const {childrenList} = useContextData();

  const renderChildren = ({item}) => (
    <OneChild
      firstName={item.firstName}
      lastName={item.lastName}
      id={item._id}
      onPress={onPress}
    />
  );

  return (
    // {/* Need to render the right age-group */}
    <View style={styles.container}>
      <FlatList
        numColumns={5}
        key={5}
        data={childrenList}
        renderItem={renderChildren}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 25,
  },
});

export default AllChildrenList;
