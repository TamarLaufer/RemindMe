import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
  ImageBackground,
  FlatList,
} from 'react-native';
import {useContextData} from '../Context/ContextData';
import {strings} from '../utils/Strings';
import ScreensModal from './ScreensModal';
import {styles} from '../styles/style';

const Settings = () => {
  const {
    switchScreens,
    showModal,
    setShowModal,
    updateCurrentScreen,
    currentScreen,
    image,
  } = useContextData();

  const btnDataArr = [
    {
      text: strings.addChild,
      onPress: () => {
        setShowModal(true);
        updateCurrentScreen(switchScreens.ADD_CHILD); //'Add' Component
      },
    },
    {
      text: strings.addGroup,
      onPress: () => {
        setShowModal(true);
        updateCurrentScreen(switchScreens.ADD_GROUP); //'AddGroup' Component
      },
    },
    {
      text: strings.editChild,
      onPress: () => {
        setShowModal(true);
        updateCurrentScreen(switchScreens.EDIT_CHILD_LIST); //'ChildrenListForEdit' Component
      },
    },
    {
      text: strings.editGroup,
      onPress: () => {
        setShowModal(true);
        updateCurrentScreen(switchScreens.EDIT_GROUP_LIST); //'EditGroup' Component
      },
    },
    {
      text: strings.removeChild,
      onPress: () => {
        setShowModal(true);
        console.log('text: strings.removeChild');
        updateCurrentScreen(switchScreens.REMOVE_CHILD); //'RemoveChild' Component
      },
    },
    {
      text: strings.removeGroup,
      onPress: () => {
        setShowModal(true);
        updateCurrentScreen(switchScreens.REMOVE_GROUP); //'RemoveGroup' Component
      },
    },
  ];

  const OneGroupButton = ({text, onPress, id}) => (
    <TouchableOpacity
      key={id}
      style={styles.bigButton}
      onPress={() => {
        onPress();
      }}>
      <Text style={styles.bigName}>{text}</Text>
    </TouchableOpacity>
  );

  const renderGroupBtn = ({item}) => (
    <OneGroupButton text={item.text} onPress={item.onPress} id={item._id} />
  );

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.containerButtons}>
        <FlatList
          numColumns={2}
          key={2}
          data={btnDataArr}
          renderItem={renderGroupBtn}
        />
        {showModal && <ScreensModal />}
      </View>
    </ImageBackground>
  );
};

export default Settings;
