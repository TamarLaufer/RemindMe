import {Formik} from 'formik';
import React, {useState, useEffect} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import * as Yup from 'yup';
import {useContextData} from '../Context/ContextData';
import {formikValues, strings} from '../utils/Strings';
import SubmitBtn from './btn/SubmitBtn';
import {styles} from '../styles/style';

const Add = () => {
  const {
    addChild,
    showModal,
    setShowModal,
    popUp,
    child,
    isEditMode,
    groups,
    updateChild,
  } = useContextData();

  const initValues = {
    firstName: '',
    lastName: '',
    address: '',
    parentPhone: '',
    parent2Phone: '',
    group: {
      label: '',
      value: '',
    },
    isArrived: false,
  };
  const childParams = child;

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
      .min(2, strings.tooShortName)
      .max(15, strings.tooLongName)
      .required(strings.insertLastName),
    address: Yup.string(),
    parentPhone: Yup.string()
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        strings.validationPhone,
      )
      .required(strings.phoneMissing),
    parent2Phone: Yup.string()
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        strings.validationPhone,
      )
      .required(strings.phoneMissing),
    group: Yup.object().shape({}).required(strings.groupMissing),
  });

  const inputDataArray = [
    {
      style: styles.input,
      placeholder: strings.firstName,
      value: formikValues.firstName,
      keyboardType: 'default',
    },
    {
      style: styles.input,
      placeholder: strings.lastName,
      value: formikValues.lastName,
      keyboardType: 'default',
    },
    {
      style: styles.input,
      placeholder: strings.address,
      value: formikValues.address,
      keyboardType: 'default',
    },
    {
      style: styles.input_phone,
      placeholder: strings.parentPhone,
      value: formikValues.parentPhone,
      keyboardType: 'phone-pad',
    },
    {
      style: styles.input_phone,
      placeholder: strings.parent2Phone,
      value: formikValues.parent2Phone,
      keyboardType: 'phone-pad',
    },
  ];

  const renderInputsAndErrors = (inputData = [], formikProps) => {
    return inputData?.map((input, index) => (
      <View key={index}>
        <TextInput
          onBlur={formikProps.handleBlur(input.value)}
          style={input.style}
          placeholder={input.placeholder}
          placeholderTextColor={'#73777B'}
          onChangeText={formikProps.handleChange(input.value)}
          value={formikProps.values[input.value]}
          keyboardType={input.keyboardType}
        />
        {
          <Text style={styles.validation_error}>
            {formikProps.touched && formikProps.errors[input.value]}
          </Text>
        }
      </View>
    ));
  };

  const params = {
    formik: {
      initialValues: isEditMode ? childParams : initValues,
      validationSchema: SignupSchema,
      validateOnBlur: false,
      onSubmit: (values, actions) => {
        if (isEditMode) {
          updateChild(childParams._id, values);
          actions.resetForm();
          setShowModal(!showModal);
          popUp(strings.childEditedSuccessfully);
        } else {
          addChild(values);
          actions.resetForm();
          setShowModal(!showModal);
          popUp(strings.childAddedSuccessfully);
        }
      },
    },
    dropDown: formikProps => ({
      style: styles.dropdown,
      placeholderStyle: styles.placeholderStyle,
      selectedTextStyle: styles.selectedTextStyle,
      inputSearchStyle: styles.inputSearchStyle,
      iconStyle: styles.iconStyle,
      data: newList,
      maxHeight: 300,
      labelField: 'label',
      valueField: 'value',
      placeholder: !isFocus ? strings.chooseGroup : '...',
      value: formikProps.values.group,
      onFocus: () => setIsFocus(true),
      onChange: item => {
        console.log('item', item);
        formikProps.setFieldValue('group', item);
        setIsFocus(false);
      },
    }),
  };

  return (
    <Formik {...params.formik}>
      {formikProps => (
        <View style={styles.addContainer}>
          {isEditMode ? (
            <Text style={styles.header}>{strings.editChild}</Text>
          ) : (
            <Text style={styles.header}>{strings.addChild}</Text>
          )}
          {renderInputsAndErrors(inputDataArray, formikProps)}
          <Dropdown {...params.dropDown(formikProps)} />
          <Text style={styles.validation_error}>
            {formikProps.errors.group && formikProps.errors.group}
          </Text>
          <SubmitBtn
            title={isEditMode ? strings.editChild : strings.addChild}
            onPress={formikProps.handleSubmit}
            disabled={!formikProps.isValid}
          />
        </View>
      )}
    </Formik>
  );
};

export default Add;
