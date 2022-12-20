import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import {Formik} from 'formik';
import {useContextData} from '../Context/ContextData';
import {strings} from '../utils/Strings';
import {useNavigation} from '@react-navigation/native';

const Add = ({navigation, route},props) => {
  const id = route?.params?.id
  console.log('iddd', id);
  const {onSubmit}=props
  const navigation = useNavigation();
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    address: '',
    parentPhone: '',
    parent2Phone: '',
  });

 

  return (
    <View style={styles.container}>
      <Formik
        initialValues={details}
        onSubmit={(values, actions) => {
          // addChild(values);
          onSubmit()
          actions.resetForm();
          // ChildAddedPopUp();
        }}>
        {props => (
          <View>
            <TextInput
              style={styles.input}
              placeholder={strings.firstName}
              onChangeText={props.handleChange('firstName')}
              value={props.values.firstName}
            />

            <TextInput
              style={styles.input}
              placeholder={strings.lastName}
              onChangeText={props.handleChange('lastName')}
              value={props.values.lastName}
            />

            <TextInput
              style={styles.input}
              placeholder={strings.address}
              onChangeText={props.handleChange('address')}
              value={props.values.address}
            />

            <TextInput
              style={styles.input}
              placeholder={strings.phoneParent1}
              onChangeText={props.handleChange('parentPhone')}
              value={props.values.parentPhone}
            />

            <TextInput
              style={styles.input}
              placeholder={strings.phoneParent2}
              onChangeText={props.handleChange('parent2Phone')}
              value={props.values.parent2Phone}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={props.handleSubmit}>
              <Text style={styles.name}>{strings.addChild}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    width: 1000,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#83A3C2',
    margin: 3,
    cursor: 'pointer',
  },
  name: {
    fontSize: 43,
    textAlign: 'center',
    color: '#EAEAEA',
  },
  input: {
    width: 1000,
    height: 70,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 6,
    fontSize: 26,
    margin: 7,
  },
});
export default Add;
