import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Formik} from 'formik';
import {useContextData} from '../Context/ContextData';

const UpdateChild = () => {
  const {updateChild} = useContextData();

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
        onSubmit={values => {
          updateChild(values);
        }}>
        {props => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="שם פרטי"
              onChangeText={props.handleChange('firstName')}
              value={props.values.firstName}
            />

            <TextInput
              style={styles.input}
              placeholder="שם משפחה"
              onChangeText={props.handleChange('lastName')}
              value={props.values.lastName}
            />

            <TextInput
              style={styles.input}
              placeholder="כתובת"
              onChangeText={props.handleChange('address')}
              value={props.values.address}
            />

            <TextInput
              style={styles.input}
              placeholder="טלפון הורה 1"
              onChangeText={props.handleChange('parentPhone')}
              value={props.values.parentPhone}
            />

            <TextInput
              style={styles.input}
              placeholder="טלפון הורה 2"
              onChangeText={props.handleChange('parent2Phone')}
              value={props.values.parent2Phone}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={props.handleSubmit}>
              <Text style={styles.name}>עדכון פרטים</Text>
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

export default UpdateChild;
