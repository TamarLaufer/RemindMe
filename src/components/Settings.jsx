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
import sizes from '../utils/sizes';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

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
    <TouchableOpacity key={id} style={styles.bigButton} onPress={onPress}>
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

const styles = StyleSheet.create({
  container: {
    width: sizes.PageWidth,
    height: sizes.PageHieght,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButtons: {
    marginTop: '2%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigButton: {
    width: sizes.PageWidth * 0.4,
    height: sizes.PageHieght * 0.16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    backgroundColor: '#83A3C2',
    margin: '1%',
    shadowRadius: 20,
    shadowOpacity: 0.8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: -4},
    borderColor: '#83A3C2',
    color: 'black',
  },
  bigName: {
    fontSize: RFValue(28, sizes.PageWidth),
    textAlign: 'center',
    color: '#EAEAEA',
    fontFamily: 'Fredoka-Medium',
  },
});
export default Settings;
