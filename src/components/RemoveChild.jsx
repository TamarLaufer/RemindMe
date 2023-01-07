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
  const {childrenList, removeChild, getAllChildren, popUp} = useContextData();

    useEffect(() => {
      getAllChildren();
    }, []);


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

  const renderChildren = childrenList.map((child, index) => {
    return (
      <ChildrenRenderd
        firstName={child.firstName}
        lastName={child.lastName}
        id={child._id}
        key={index}
      />
    );
  });

  return (
    <>
      <Text style={styles.header}>{strings.chooseChildToRemove}</Text>
      <View style={styles.modalContainer}>{renderChildren}</View>
    </>
  );
};

export default RemoveChild;
