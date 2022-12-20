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

const RemoveChild = () => {
  const {childrenList, removeChild} = useContextData();

  const ChildAddedPopUp = () =>
    Alert.alert(strings.chooseChildToRemove, ' ', [
      {
        text: strings.ok,
        onPress: () => {
          console.log('ok pressed');
        },
      },
    ]);

  useEffect(() => {
    ChildAddedPopUp();
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
      style={styles.button}
      onPress={() => {
        removeChild(id);
      }}>
      <Text style={styles.name}>
        {firstName} {lastName}
      </Text>
    </TouchableOpacity>
  );

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
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 50,
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
    fontSize: 35,
    textAlign: 'center',
    color: '#EAEAEA',
  },
});

export default RemoveChild;
