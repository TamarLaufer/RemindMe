import React from 'react';
import {StyleSheet, TouchableOpacity, Text, FlatList} from 'react-native';
import {useContextData} from '../Context/ContextData';

const RemoveChild = () => {
  const {childrenList, removeChild} = useContextData();

  const renderChildren = ({item}) => (
    <ChildrenRenderd
      firstName={item.firstName}
      lastName={item.lastName}
      id={item._id}
    />
  );

  function ChildrenRenderd({firstName, lastName, id}) {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          removeChild(id);
        }}>
        <Text style={styles.name}>
          {firstName} {lastName}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    // {/* Need to render the right age-group */}
    <FlatList
      numColumns={5}
      key={5}
      data={childrenList}
      renderItem={renderChildren}
    />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: 225,
    height: 95,
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

export default RemoveChild;
