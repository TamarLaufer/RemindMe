import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useContextData} from '../Context/ContextData';

const Groups = () => {
  const navigation = useNavigation();
  const {groupsList} = useContextData();

  const OneButton = ({name, id}) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate('AllChildrenList');
      }}>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );

  const renderGroup = ({item}) => <OneButton name={item.name} id={item._id} />;

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={groupsList.length >= 6 ? 2 : 1}
        key={2}
        data={groupsList}
        renderItem={renderGroup}
        keyExtractor={group => group.id}
        scrollToItem={{animated: true, viewPosition: 0.5}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: 400,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#83A3C2',
    margin: 7,
  },
  name: {
    fontSize: 43,
    textAlign: 'center',
    color: '#EAEAEA',
  },
});

export default Groups;
