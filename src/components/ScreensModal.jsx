import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Modal,
  Text,
  Pressable,
  Alert,
  ImageBackground,
  View,
} from 'react-native';
import {useContextData} from '../Context/ContextData';
import {strings, screenNames} from '../utils/Strings';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from '../styles/style';
import {Avatar} from 'react-native-paper';
import sizes from '../utils/sizes';

const ScreensModal = () => {
  const {showModal, setShowModal, currentScreen} = useContextData();

  // const {addChild, removeChild, editChild, getChildById} = useContextData();
  const [setModalVisible] = useState(false);
  const imageModal = require('../images/photo1.jpg');

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        Alert.alert(strings.windowNotClosed);
        setModalVisible(!showModal);
      }}>
      <View style={styles.centeredView}>
        <KeyboardAwareScrollView contentContainerStyle={styles.modalView}>
          <ImageBackground
            source={imageModal}
            resizeMode="cover"
            style={styles.imageModal}>
            <Pressable
              style={styles.modalButton}
              onPress={() => setShowModal(false)}>
              {/* <Text style={styles.close}>X</Text> */}
              <Avatar.Icon
                size={36}
                icon="close-outline"
                style={styles.close}
              />
            </Pressable>
            {currentScreen}
          </ImageBackground>
        </KeyboardAwareScrollView>
      </View>
    </Modal>
  );
};

export default ScreensModal;
