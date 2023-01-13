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

const AddGroup = () => {
  const {
    addGroup,
    updateGroup,
    showModal,
    setShowModal,
    popUp,
    isEditMode,
    group,
  } = useContextData();

  const initValues = {
    groupName: '',
    assistantName: '',
    childrenList: [],
  };

  const groupParams = group;

  const SignupSchema = Yup.object().shape({
    groupName: Yup.string()
      .min(2, strings.tooShortGroupName)
      .max(15, strings.tooLongGroupName)
      .required(strings.insertGroupName),
    assistantName: Yup.string()
      .min(2, strings.tooShortLastName)
      .max(15, strings.tooLongLastName),
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
          popUp(strings.groupUpdatedSeccesfully);
        } else {
          addGroup(values);
          actions.resetForm();
          setShowModal(!showModal);
          popUp(strings.groupAddedSeccesfully);
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

const styles = StyleSheet.create({
  validation_error: {
    color: 'red',
    fontSize: RFValue(7, sizes.PageHieght),
    paddingRight: sizes.PageWidth * 0.01,
  },
  addContainer: {
    flex: 1,
    marginBottom: sizes.PageWidth * 0.04,
    alignItems: 'center',
  },
  placeholderStyle: {
    fontSize: RFValue(8, sizes.PageHieght),
    color: 'black',
  },
  selectedTextStyle: {
    fontSize: RFValue(10, sizes.PageHieght),
    color: 'black',
  },
  inputSearchStyle: {
    width: sizes.PageWidth * 0.01,
    height: sizes.PageHieght * 0.03,
    fontSize: RFValue(8, sizes.PageHieght),
    color: 'black',
  },
  iconStyle: {
    width: sizes.PageWidth * 0.02,
    height: sizes.PageHieght * 0.03,
  },
  input: {
    width: sizes.PageWidth * 0.8,
    height: sizes.PageHieght * 0.12,
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: sizes.PageWidth * 0.02,
    paddingRight: sizes.PageWidth * 0.02,
    borderRadius: 26,
    fontSize: RFValue(9, sizes.PageHieght),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    color: 'black',
    marginTop: sizes.PageWidth * 0.02,
  },
  dropdown: {
    width: sizes.PageWidth * 0.8,
    height: sizes.PageHieght * 0.12,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 26,
    paddingHorizontal: sizes.PageWidth * 0.02,
    color: 'black',
  },
  header: {
    fontSize: RFValue(11, sizes.PageHieght),
    color: '#3F4E4F',
    paddingBottom: sizes.PageHieght * 0.05,
    fontFamily: 'Fredoka-Medium',
  },
});

export default AddGroup;
