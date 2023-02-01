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
import * as Yup from 'yup';
import SubmitBtn from './btn/SubmitBtn';
import {RFValue} from 'react-native-responsive-fontsize';
import sizes from '../utils/sizes';
import {styles} from '../styles/style';

const AddGroup = () => {
  const {
    addGroup,
    updateGroup,
    showModal,
    setShowModal,
    popUp,
    isEditMode,
    group,
    userInfo,
  } = useContextData();

  const initValues = {
    groupName: '',
    assistantName: '',
    childrenList: [],
    user: userInfo._id,
  };
  

  const groupParams = group;

  const SignupSchema = Yup.object().shape({
    groupName: Yup.string()
      .min(2, strings.tooShortName)
      .max(15, strings.tooLongName)
      .required(strings.insertGroupName),
    assistantName: Yup.string()
      .min(2, strings.tooShortName)
      .max(15, strings.tooLongName),
  });

  const inputArr = [
    {
      style: styles.input,
      placeholder: strings.groupName,
      value: formikValues.groupName,
      keyboardType: 'default',
    },
    {
      style: styles.input,
      placeholder: strings.assistantName,
      value: formikValues.assistantName,
      keyboardType: 'default',
    },
  ];

  const renderInputsAndErrors = (inputArray = [], formikProps) => {
    return inputArray?.map((input, index) => (
      <View key={index}>
        <TextInput
          style={input.style}
          placeholder={input.placeholder}
          onChangeText={formikProps.handleChange(input.value)}
          value={formikProps.values[input.value]}
          keyboardType={input.keyboardType}
        />
        {
          <Text style={styles.validation_error}>
            {formikProps.touched &&
              formikProps.errors[input.value] &&
              formikProps.errors[input.value]}
          </Text>
        }
      </View>
    ));
  };

  const params = {
    formik: {
      initialValues: isEditMode ? groupParams : initValues,
      validationSchema: SignupSchema,
      validateOnBlur: false,
      onSubmit: (values, actions) => {
        if (isEditMode) {
          updateGroup(groupParams._id, values);
          actions.resetForm();
          setShowModal(!showModal);
          popUp(strings.groupUpdatedSuccessfully);
        } else {
          addGroup(values);
          actions.resetForm();
          setShowModal(!showModal);
          popUp(strings.groupAddedSuccessfully);
        }
      },
    },
  };

  return (
    <Formik {...params.formik}>
      {formikProps => (
        <View style={styles.addContainer}>
          {isEditMode ? (
            <Text style={styles.header}>{strings.editGroup}</Text>
          ) : (
            <Text style={styles.header}>{strings.addGroup}</Text>
          )}
          {renderInputsAndErrors(inputArr, formikProps)}
          <SubmitBtn
            title={isEditMode ? strings.editGroup : strings.addGroup}
            onPress={formikProps.handleSubmit}
            disabled={!formikProps.isValid}
          />
        </View>
      )}
    </Formik>
  );
};

export default AddGroup;
