import React, {useEffect, useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import {Formik} from 'formik';
import {screenNames, strings, formikValues} from '../utils/Strings';
import {useContextData} from '../Context/ContextData';
import {useNavigation, useNavigationParam} from '@react-navigation/native';
import {styles} from '../styles/style';

const Add = ({route}, props) => {
  const {addChild, showModal, setShowModal, popUp} = useContextData();
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
          addChild(values);
          actions.resetForm();
          popUp(strings.childAddedSeccesfully);
          setShowModal(!showModal);
        }}>
        {props => (
          <View>
            <TextInput
              style={styles.input}
              placeholder={strings.firstName}
              onChangeText={props.handleChange(formikValues.firstName)}
              value={props.values.firstName}
            />

            <TextInput
              style={styles.input}
              placeholder={strings.lastName}
              onChangeText={props.handleChange(formikValues.lastName)}
              value={props.values.lastName}
            />

            <TextInput
              style={styles.input}
              placeholder={strings.address}
              onChangeText={props.handleChange(formikValues.address)}
              value={props.values.address}
            />

            <TextInput
              style={styles.input}
              placeholder={strings.parentPhone}
              onChangeText={props.handleChange(formikValues.parentPhone)}
              value={props.values.parentPhone}
            />

            <TextInput
              style={styles.input}
              placeholder={strings.parent2Phone}
              onChangeText={props.handleChange(formikValues.parent2Phone)}
              value={props.values.parent2Phone}
            />
            <TouchableOpacity
              style={styles.bigButtonFormik}
              onPress={props.handleSubmit}>
              <Text style={styles.bigName}>{strings.addChild}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Add;
