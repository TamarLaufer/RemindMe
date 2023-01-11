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
import ScreensModal from './ScreensModal';

const Groups = () => {
  const navigation = useNavigation();
  const {groups, image, getAllGroups, showModal, getAllChildrenByGroup} =
    useContextData();

  useEffect(() => {
    getAllGroups();
  }, []);

  const OneButton = ({name, id}) => (
    <TouchableOpacity
      key={id}
      style={styles.bigButton}
      onPress={() => {
        getAllChildrenByGroup(id);
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
      {/* {listIsEmpty ? (
        <View style={styles.container}>
          <Text style={styles.header}>{strings.noGroups}</Text>
          <TouchableOpacity
            style={styles.bigButton}
            onPress={() => {
              setShowModal(true);
              updateCurrentScreen(switchScreens.ADD_GROUP);
            }}>
            <Text style={styles.bigName}>{strings.addGroup}</Text>
          </TouchableOpacity>
        </View>
      ) : ( */}
      <View style={styles.container}>
        <View style={styles.containerButtons}>
          <FlatList
            numColumns={2}
            data={groups}
            renderItem={renderGroup}
            keyExtractor={item => item._id}
            scrollToItem={{animated: true, viewPosition: 0.5}}
          />
        </View>
      </View>
      {/* )} */}
      {showModal && <ScreensModal />}
    </ImageBackground>
  );
};

export default Groups;
