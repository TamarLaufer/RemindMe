import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
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
    allModesForModal,
    image,
    updateModeForModal,
    groups,
    popUp,
  } = useContextData();

  const btnDataArr = [
    {
      text: strings.addChild,
      onPress: () => {
        if (groups.length > 0) {
          setShowModal(true);
          updateCurrentScreen(switchScreens.ADD_CHILD, false); //'Add' Component
        } else {
          popUp(strings.AddGroupFirst);
        }
      },
    },
    {
      text: strings.addGroup,
      onPress: () => {
        setShowModal(true);
        updateCurrentScreen(switchScreens.ADD_GROUP, false); //'AddGroup' Component
      },
    },
    {
      text: strings.editChild,
      onPress: () => {
        setShowModal(true);
        updateCurrentScreen(switchScreens.GROUP_FOR_EDIT_CHILD, true); //'ChildrenListForEdit' Component
        updateModeForModal(allModesForModal.EDIT_CHILD);
      },
    },
    {
      text: strings.editGroup,
      onPress: () => {
        setShowModal(true);
        updateCurrentScreen(switchScreens.EDIT_GROUP_LIST, true); //'GroupListForEdit' Component
      },
    },
    {
      text: strings.removeChild,
      onPress: () => {
        setShowModal(true);
        updateCurrentScreen(switchScreens.GROUP_FOR_EDIT_CHILD); //'RemoveChild' Component
        updateModeForModal(allModesForModal.REMOVE_CHILD);
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

export default Settings;
