import React, {useEffect, useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {Field, Formik} from 'formik';
import {screenNames, strings, formikValues} from '../utils/Strings';
import {useContextData} from '../Context/ContextData';
import {useNavigation, useNavigationParam} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from '../styles/style';
import {Dropdown} from 'react-native-element-dropdown';
import * as Yup from 'yup';

const Add = ({route}, props) => {
  const {
    addChild,
    showModal,
    setShowModal,
    popUp,
    getAllGroups,
    groupList,
    groups,
  } = useContextData();

  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    address: '',
    parentPhone: '',
    parent2Phone: '',
    group: '',
    isArrived: false,
  });
  const [isFocus, setIsFocus] = useState(false);

  const newList = groups?.map(group => ({
    label: group.groupName,
    value: group._id,
  }));

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, strings.tooShortName)
      .max(15, strings.tooLongName)
      .required(strings.insertFirstName),
    lastName: Yup.string()
      .min(2, strings.tooShortLastName)
      .max(15, strings.tooLongLastName)
      .required(strings.insertLastName),
    address: Yup.string().min(2, 'Too Short!').max(18, 'Too Long!'),
    parentPhone: Yup.string()
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        strings.validationPhone,
      )
      .required(strings.phoneMissing),
    group: Yup.string().required(strings.groupMissing),
  });

  return (
    <Formik
      initialValues={details}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        console.log('values', values);
        addChild(values);
        actions.resetForm();
        popUp(strings.childAddedSeccesfully);
        setShowModal(!showModal);
      }}>
      {formikProps => (
        <View style={{flex: 1}}>
          <TextInput
            style={styles.input}
            placeholder={strings.firstName}
            onChangeText={formikProps.handleChange(formikValues.firstName)}
            value={formikProps.values.firstName}
            onBlur={() => formikProps.setFieldTouched(formikValues.firstName)}
          />
          {formikProps.touched && formikProps.errors.firstName && (
            <Text style={styles.validation_error}>
              {formikProps.errors.firstName}
            </Text>
          )}

          <TextInput
            style={styles.input}
            placeholder={strings.lastName}
            onChangeText={formikProps.handleChange(formikValues.lastName)}
            value={formikProps.values.lastName}
            onBlur={() => formikProps.setFieldTouched(formikValues.lastName)}
          />
          {formikProps.touched && formikProps.errors.lastName && (
            <Text style={styles.validation_error}>
              {formikProps.errors.lastName}
            </Text>
          )}

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
            keyboardType="phone-pad"
            onBlur={() => formikProps.setFieldTouched(formikValues.parentPhone)}
          />
          {formikProps.touched && formikProps.errors.parentPhone && (
            <Text style={styles.validation_error}>
              {formikProps.errors.parentPhone}
            </Text>
          )}

          <TextInput
            style={styles.input}
            placeholder={strings.parent2Phone}
            onChangeText={formikProps.handleChange(formikValues.parent2Phone)}
            value={formikProps.values.parent2Phone}
            keyboardType="phone-pad"
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
            onBlur={() => formikProps.setFieldTouched(formikValues.group)}
            onChange={item => {
              console.log('item', item);
              formikProps.setFieldValue('group', item.value);
              setIsFocus(false);
            }}
          />
          {formikProps.touched && formikProps.errors.group && (
            <Text style={styles.validation_error}>
              {formikProps.errors.group}
            </Text>
          )}

          <TouchableOpacity
            style={
              formikProps.isValid
                ? styles.bigButtonFormik
                : styles.bigButtonFormikNotActive
            }
            onPress={formikProps.handleSubmit}
            disabled={!formikProps.isValid}>
            <Text style={styles.bigName}>{strings.addChild}</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default Add;
