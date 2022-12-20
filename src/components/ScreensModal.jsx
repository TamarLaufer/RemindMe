import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Modal, StyleSheet, Text, Pressable, Alert} from 'react-native';
import {useContextData} from '../Context/ContextData';
import {strings} from '../utils/Strings';
import Add from './Add';

const ScreensModal = () => {
  const {addChild, removeChild, editChild, getChildById} = useContextData();
  const ChildAddedPopUp = () =>
    Alert.alert(null, strings.childAddedSeccesfully, [
      {
        text: strings.ok,
        onPress: () => {
          navigation.navigate('AllChildrenList');
        },
      },
    ]);

  const screens = {
    ADD_CHILD: (
      <Add
        onSubmit={(values, actions) => {
          addChild(values);
          //   actions.resetForm();
          ChildAddedPopUp();
        }}
      />
    ),
    REMOVE_CHILD: <removeChild />,
    EDIT_CHILD: (
      <AllChildrenList
        onPress={id => {
          navigation.navigate('Add', id);
        }}
      />
    ),
    ADD_GROUP: 'addGroup',
    REMOVE_GROUP: 'removeGroup',
    EDIT_GROUP: 'editGroup',
  };
  const [currentScreen, setCurrentScreen] = useState(screens.ADD_CHILD);
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const screenDisplay = () => {
    return screens[currentScreen];
    // if (currentScreen === screens.ADD_CHILD) {
    //   return (
    //     <Add
    //       onSubmit={(values, actions) => {
    //         addChild(values);
    //         actions.resetForm();
    //         ChildAddedPopUp();
    //       }}
    //     />
    //   );
    // } else if (currentScreen === screens.REMOVE_CHILD) {
    //   return <removeChild />;
    // } else if (currentScreen === screens.EDIT_CHILD) {
    //   return (
    //     <Add
    //       onPress={id => {
    //         editChild(id);
    //       }}
    //     />
    //   );
    // } else if (currentScreen === screens.ADD_GROUP) {
    //   return (
    //     <Add
    //       onPress={id => {
    //         editChild(id);
    //       }}
    //     />
    //   );
    // } else if (currentScreen === screens.REMOVE_GROUP) {
    //   return (
    //     <Add
    //       onPress={id => {
    //         editChild(id);
    //       }}
    //     />
    //   );
    // } else if (currentScreen === screens.EDIT_GROUP) {
    //   return (
    //     <Add
    //       onPress={id => {
    //         editChild(id);
    //       }}
    //     />
    //   );
    // }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>{screenDisplay()}</View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: 1200,
    height: 650,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ScreensModal;
