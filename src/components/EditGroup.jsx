import React, {useState, useEffect} from 'react';
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

const EditGroup = () => {
  const {updateGroup, group, showModal, setShowModal} = useContextData();
  const [groupValues, setGroupValues] = useState(null);
  const [details, setDetails] = useState({
    groupName: '',
    assistantName: '',
  });
  const groupParams = group;

  useEffect(() => {
    setGroupValues(groupParams);
  }, []);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={groupValues || details}
        onSubmit={(values, actions) => {
          updateGroup(groupParams._id, values);
          // actions.resetForm();
          setShowModal(!showModal);
        }}
        enableReinitialize>
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
              <Text style={styles.bigName}>{strings.editGroup}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default EditGroup;
