import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {string} from 'yup';
import {useContextData} from '../Context/ContextData';
import {styles} from '../styles/style';
import {screenNames, strings} from '../utils/Strings';

const Groups = () => {
  const navigation = useNavigation();
  const {
    groups,
    image,
    getAllGroups,
    childrenList,
    setGroupByPress,
    setShowModal,
    switchScreens,
    updateCurrentScreen,
    isGroupListEmpty,
    listIsEmpty,
  } = useContextData();

  useEffect(() => {
    getAllGroups();
    isGroupListEmpty();
  }, []);

  const getAllChildrenByGroupId = groupId => {
    const filteredList = childrenList.filter(child => child.group === groupId);
    setGroupByPress(filteredList);
  };

  const OneButton = ({name, id}) => (
    <TouchableOpacity
      key={id}
      style={styles.bigButton}
      onPress={() => {
        getAllChildrenByGroupId();
        navigation.navigate(screenNames.allChildrenList);
      }}>
      <Text style={styles.bigName}>{name}</Text>
    </TouchableOpacity>
  );

  const renderGroup = ({item}) => (
    <OneButton name={item.groupName} id={item._id} />
  );

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.containerButtons}>
          {listIsEmpty ? (
            <FlatList
              numColumns={2}
              data={groups}
              renderItem={renderGroup}
              keyExtractor={item => item._id}
              scrollToItem={{animated: true, viewPosition: 0.5}}
            />
          ) : (
            <Button
              onPress={() => {
                setShowModal(true);
                updateCurrentScreen(switchScreens.ADD_GROUP);
              }}
              title={strings.addGroup}
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

export default Groups;
