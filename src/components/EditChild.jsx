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
import {formikValues, screenNames, strings} from '../utils/Strings';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';

const EditChild = ({route}) => {
  const {updateChild, child, showModal, setShowModal, groups} =
    useContextData();
  const navigation = useNavigation();
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    address: '',
    parentPhone: '',
    parent2Phone: '',
    group: '',
    isArrived: false,
  });
  const [childValues, setChildValues] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const childParams = child;
  const newList = groups?.map(group => ({
    label: group.groupName,
    value: group._id,
  }));

  useEffect(() => {
    setChildValues(childParams);
  }, []);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={childValues || details}
        onSubmit={(values, actions) => {
          updateChild(childParams._id, values);
          // actions.resetForm();
          setShowModal(!showModal);
        }}
        enableReinitialize>
        {formikProps => (
          <View>
            <TextInput
              style={styles.input}
              placeholder={strings.firstName}
              onChangeText={formikProps.handleChange(formikValues.firstName)}
              value={formikProps.values.firstName}
            />

            <TextInput
              style={styles.input}
              placeholder={strings.lastName}
              onChangeText={formikProps.handleChange(formikValues.lastName)}
              value={formikProps.values.lastName}
            />

            <TextInput
              style={styles.input}
              placeholder={strings.address}
              onChangeText={formikProps.handleChange(formikValues.address)}
              value={formikProps.values.address}
            />

            <TextInput
              style={styles.input}
              placeholder={strings.parentPhone}
              onChangeText={formikProps.handleChange(formikValues.parentPhone)}
              value={formikProps.values.parentPhone}
            />

            <TextInput
              style={styles.input}
              placeholder={strings.parent2Phone}
              onChangeText={formikProps.handleChange(formikValues.parent2Phone)}
              value={formikProps.values.parent2Phone}
            />
            <Dropdown
              style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={newList}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? strings.chooseGroup : '...'}
              value={formikProps.values.group}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                console.log('item', item);
                formikProps.setFieldValue('group', item.value);
                setIsFocus(false);
              }}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={formikProps.handleSubmit}>
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
