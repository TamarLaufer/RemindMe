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
import {formikVlues, screenNames, strings} from '../utils/Strings';
import {useNavigation} from '@react-navigation/native';

const EditChild = ({route}) => {
  const {updateChild, child, showModal, setShowModal} = useContextData();
  const navigation = useNavigation();
  const childParams = child;
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    address: '',
    parentPhone: '',
    parent2Phone: '',
  });
  const [childVlues, setChildValues] = useState(null);
  const [toRefresh, setToRefresh] = useState(false);

  useEffect(() => {
    console.log(childParams._id);
    setChildValues(childParams);
  }, []);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={childVlues || details}
        onSubmit={(values, actions) => {
          updateChild(childParams._id, values);
          // actions.resetForm();
          setToRefresh(!toRefresh);
          setShowModal(!showModal);
        }}
        enableReinitialize>
        {props => (
          <View>
            <TextInput
              style={styles.input}
              placeholder={strings.firstName}
              onChangeText={props.handleChange(formikVlues.firstName)}
              value={props.values.firstName}
            />

            <TextInput
              style={styles.input}
              placeholder={strings.lastName}
              onChangeText={props.handleChange(formikVlues.lastName)}
              value={props.values.lastName}
            />

            <TextInput
              style={styles.input}
              placeholder={strings.address}
              onChangeText={props.handleChange(formikVlues.address)}
              value={props.values.address}
            />

            <TextInput
              style={styles.input}
              placeholder={strings.parentPhone}
              onChangeText={props.handleChange(formikVlues.parentPhone)}
              value={props.values.parentPhone}
            />

            <TextInput
              style={styles.input}
              placeholder={strings.parent2Phone}
              onChangeText={props.handleChange(formikVlues.parent2Phone)}
              value={props.values.parent2Phone}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={props.handleSubmit}>
              <Text style={styles.name}>{strings.editChild}</Text>
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
export default EditChild;
