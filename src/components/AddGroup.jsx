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
import {formikValues, strings} from '../utils/Strings';
import {styles} from '../styles/style';

const Add = ({route}, props) => {
  const {onSubmit} = props;
  const {addGroup, showModal, setShowModal} = useContextData();
  const [details, setDetails] = useState({
    groupName: '',
    assistantName: '',
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={details}
        onSubmit={(values, actions) => {
          addGroup(values);
          actions.resetForm();
          setShowModal(!showModal);
        }}>
        {props => (
          <View>
            <TextInput
              style={styles.input}
              placeholder={strings.groupName}
              onChangeText={props.handleChange(formikValues.groupName)}
              value={props.values.groupName}
            />

            <TextInput
              style={styles.input}
              placeholder={strings.assistantName}
              onChangeText={props.handleChange(formikValues.assistantName)}
              value={props.values.assistantName}
            />
            <TouchableOpacity
              style={styles.bigButtonFormik}
              onPress={props.handleSubmit}>
              <Text style={styles.bigName}>{strings.addGroup}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Add;
