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
import {styles} from '../styles/style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'always'}
      style={{flex: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            Alert.alert(strings.windowNotClosed);
            setModalVisible(!showModal);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>{currentScreen}</View>
          </View>
          <Pressable
            style={[styles.modalButton, styles.buttonOpen]}
            onPress={() => setShowModal(false)}>
            <Text style={styles.textStyle}>X</Text>
          </Pressable>
        </Modal>
      </View>
    </KeyboardAwareScrollView>
  );
};


export default ScreensModal;
