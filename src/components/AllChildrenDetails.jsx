import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ChildrenRenderdList from './ChildrenRendrerdList';

const AllChildrenDetails = () => {
  const {childrenList} = useContextData();
  const renderChild = () => <ChildrenRenderdList />;

  return (
    <View style={styles.sectionContainer}>
      {/* Need to render the right age-group */}
      <FlatList
        numColumns={5}
        key={5}
        data={childrenList}
        renderItem={renderChild}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

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
export default AllChildrenDetails;
