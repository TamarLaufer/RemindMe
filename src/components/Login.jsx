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
import {formikValues, screenNames, strings} from '../utils/Strings';
import * as Yup from 'yup';
import SubmitBtn from './btn/SubmitBtn';
import {RFValue} from 'react-native-responsive-fontsize';
import sizes from '../utils/sizes';
import {styles} from '../styles/style';
import {Avatar, Button, Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const {popUp, isEditMode, loginFetch} = useContextData();
  const navigation = useNavigation();

  const initValues = {
    userName: '',
    password: '',
    phoneNumber: '',
    email: '',
    groupsList: [],
  };

  const SignupSchema = Yup.object().shape({
    userName: Yup.string()
      .min(2, strings.tooShortName)
      .max(15, strings.tooLongName)
      .required(strings.insertGroupName),
    password: Yup.string()
      .required(strings.noPasswordEntered)
      .min(5, strings.passwordTooShort),
  });

  const inputArr = [
    {
      style: styles.input_Login,
      placeholder: strings.userName,
      value: formikValues.userName,
      keyboardType: 'default',
    },
    {
      style: styles.input_Login,
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
        loginFetch(values);
        popUp(strings.loginSuccess);
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
              <View style={styles.inputLoginContainer}>
                {renderInputsAndErrors(inputArr, formikProps)}
              </View>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={formikProps.handleSubmit}
                disabled={!formikProps.isValid}>
                <Text style={styles.nameRegister}>{strings.login}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(screenNames.register);
                }}>
                <Text style={styles.link}>{strings.dontHaveAnAccountYet}</Text>
              </TouchableOpacity>
            </Card.Content>
          </Card>
        </View>
      )}
    </Formik>
  );
};

export default Login;
