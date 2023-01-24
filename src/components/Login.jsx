import React, {useState, useEffect} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  Image,
} from 'react-native';
import {Formik} from 'formik';
import {useContextData} from '../Context/ContextData';
import {formikValues, strings} from '../utils/Strings';
import * as Yup from 'yup';
import SubmitBtn from './btn/SubmitBtn';
import {RFValue} from 'react-native-responsive-fontsize';
import sizes from '../utils/sizes';
import {styles} from '../styles/style';
import {Avatar, Button, Card} from 'react-native-paper';

const Login = () => {
  const {
    addGroup,
    updateGroup,
    showModal,
    setShowModal,
    popUp,
    isEditMode,
    isEditUserMode,
    group,
    addUser,
    updateCreatedUser,
  } = useContextData();

  const initValues = {
    userName: '',
    password: '',
    phoneNumber: '',
    email: '',
    groupsList: [],
  };

  const SignupSchema = Yup.object().shape({
    userName: Yup.string()
      .min(2, strings.tooShortGroupName)
      .max(15, strings.tooLongGroupName)
      .required(strings.insertGroupName),
    password: Yup.string()
      .required(strings.noPasswordEntered)
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  });

  const inputArr = [
    {
      style: styles.input_Register,
      placeholder: strings.userName,
      value: formikValues.userName,
      keyboardType: 'default',
    },
    {
      style: styles.input_Register,
      placeholder: strings.password,
      value: formikValues.password,
      keyboardType: 'default',
    },
  ];

  const renderInputsAndErrors = (inputArray = [], formikProps) => {
    return inputArray?.map((input, index) => (
      <View key={index}>
        <TextInput
          secureTextEntry={input.value === formikValues.password && true}
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

  // const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

  return (
    <Formik {...params.formik}>
      {formikProps => (
        <View style={styles.registerContainer}>
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <View style={styles.logoAndHeadeLogin}>
                <Image
                  style={styles.logoSizeRegister}
                  source={require('../images/remindMe1.png')}
                />
                <Text variant="titleLarge" style={styles.header}>
                  {strings.login}
                </Text>
              </View>
              <View style={styles.inputRegisterContainer}>
                {renderInputsAndErrors(inputArr, formikProps)}
              </View>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={formikProps.handleSubmit}
                disabled={!formikProps.isValid}>
                <Text style={styles.nameRegister}>{strings.login}</Text>
              </TouchableOpacity>
            </Card.Content>
          </Card>
        </View>
      )}
    </Formik>
  );
};

export default Login;
