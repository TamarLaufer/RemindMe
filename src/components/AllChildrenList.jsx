import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Button,
} from 'react-native';
import {useContextData} from '../Context/ContextData';

const AllChildrenList = () => {
  const {childrenList} = useContextData();
  const [arrived, setArrived] = useState(false);

  const renderChildren = ({item}) => (
    <ChildrenRenderd
      firstName={item.firstName}
      lastName={item.lastName}
      id={item._id}
    />
  );
  function ChildrenRenderd({firstName, lastName}) {
    return (
      <TouchableOpacity
        style={arrived ? styles.notActiveButton : styles.activeButton}
        onPress={() => setArrived(!arrived)}>
        <Text style={styles.name}>
          {firstName} {lastName}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    // {/* Need to render the right age-group */}
    <View style={styles.container}>
      <FlatList
        numColumns={5}
        key={5}
        data={childrenList}
        renderItem={renderChildren}
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
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  activeButton: {
    width: 225,
    height: 95,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#83A3C2',
    margin: 7,
  },
  notActiveButton: {
    width: 225,
    height: 95,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#fff',
    margin: 7,
  },
  name: {
    fontSize: 43,
    textAlign: 'center',
    color: '#EAEAEA',
  },
});

export default AllChildrenList;
