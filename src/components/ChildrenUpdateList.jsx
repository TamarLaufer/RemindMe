import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useContextData} from '../Context/ContextData';

const ChildrenUpdateList = () => {
  const {childrenList, updateChild} = useContextData();

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
          updateChild(id);
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

export default ChildrenUpdateList;

const styles = StyleSheet.create({
  sectionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  image: {
    width: 230,
    height: 100,
    marginLeft: 5,
    marginBottom: 15,
  },
});
