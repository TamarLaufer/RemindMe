import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const Settings = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Add');
        }}>
        <Text style={styles.name}>הוספת כיתה</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // navigation.navigate('');
        }}>
        <Text style={styles.name}>הסרת כיתה</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        // onPress={() => {
        //   navigation.navigate('');
        // }}
      >
        <Text style={styles.name}>עדכון פרטי כיתה</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Add');
        }}>
        <Text style={styles.name}>הוספת ילד</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('RemoveChild');
        }}>
        <Text style={styles.name}>הסרת ילד</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('UpdateChild');
        }}>
        <Text style={styles.name}>עדכון פרטי ילד</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    maxHeight: 400,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 200,
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
