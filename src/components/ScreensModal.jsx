import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useContextData} from '../Context/ContextData';
import {strings, screenNames} from '../utils/Strings';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import sizes from '../utils/sizes';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const ScreensModal = () => {
  const {
    switchScreens,
    showModal,
    setShowModal,
    currentScreen,
    setCurrentScreen,
  } = useContextData();

  const {addChild, removeChild, editChild, getChildById} = useContextData();
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        Alert.alert(strings.windowNotClosed);
        setModalVisible(!showModal);
      }}>
      <KeyboardAwareScrollView contentContainerStyle={styles.modalView}>
        <Pressable
          style={styles.modalButton}
          onPress={() => setShowModal(false)}>
          <Text style={styles.close}>X</Text>
        </Pressable>
        {currentScreen}
      </KeyboardAwareScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  close: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: RFValue(9, sizes.PageHieght),
  },
  modalButton: {
    borderRadius: 20,
    width: sizes.PageWidth * 0.97,
    height: sizes.PageHieght * 0.1,
    padding: 10,
  },
  modalView: {
    width: sizes.PageWidth,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default ScreensModal;
