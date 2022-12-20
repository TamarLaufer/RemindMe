import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import ScreensModal from './ScreensModal';

const Settings = () => {
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState();
  const btnDataArr = [
    {
      text: 'הוספת כיתה',
      onPress: () => {
        // navigation.navigate('Add');
        setShowModal(true);
      },
    },
    {
      text: 'הוספת כיתה',
      onPress: () => {
        navigation.navigate('Add');
        setShowModal(true);
      },
    },
    {
      text: 'הוספת כיתה',
      onPress: () => {
        navigation.navigate('Add');
        setShowModal(true);
      },
    },
    {
      text: 'הוספת כיתה',
      onPress: () => {
        navigation.navigate('Add');
        setShowModal(true);
      },
    },
    {
      text: 'הוספת כיתה',
      onPress: () => {
        navigation.navigate('Add');
        setShowModal(true);
      },
    },
  ];
  const renderClassBtn = (buttonArr = []) => {
    return buttonArr.map((btn, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => {
            btn.onPress();
          }}>
          <Text style={styles.name}>{btn.text}</Text>
        </TouchableOpacity>
      );
    });
  };
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        {renderClassBtn(btnDataArr)}
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Add');
            setShowModal(true);
          }}>
          <Text style={styles.name}></Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // navigation.navigate('');
            setShowModal(true);
          }}>
          <Text style={styles.name}>הסרת כיתה</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // navigation.navigate('');
            setShowModal(true);
          }}>
          <Text style={styles.name}>עדכון פרטי כיתה</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setShowModal(true);
          }}>
          <Text style={styles.name}>הוספת ילד</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('RemoveChild');
            setShowModal(true);
          }}>
          <Text style={styles.name}>הסרת ילד</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // navigation.navigate('');
            setShowModal(true);
          }}>
          <Text style={styles.name}>עדכון פרטי ילד</Text>
        </TouchableOpacity> */}
      </View>
      {showModal && <ScreensModal />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: -1,
    flexWrap: 'wrap',
    maxHeight: 400,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 200,
    marginTop: 100,
  },
  button: {
    width: 400,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#83A3C2',
    margin: 10,
  },
  name: {
    fontSize: 43,
    textAlign: 'center',
    color: '#EAEAEA',
  },
});

export default Settings;
