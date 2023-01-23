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
import {Avatar, Button, Card} from 'react-native-paper';

const Register = () => {
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
    phoneNumber: Yup.string()
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        strings.validationPhone,
      )
      .required(strings.phoneMissing),
    email: Yup.string().email().required(),
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
    {
      style: styles.input_Register,
      placeholder: strings.email,
      value: formikValues.email,
      keyboardType: 'default',
    },
    {
      style: styles.input_Register,
      placeholder: strings.phoneNumber,
      value: formikValues.phoneNumber,
      keyboardType: 'phone-pad',
    },
  ];

  const renderInputsAndErrors = (inputArray = [], formikProps) => {
    return inputArray?.map((input, index) => (
      <View key={index}>
        <TextInput
          secureTextEntry={true}
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

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

  return (
    <Formik {...params.formik}>
      {formikProps => (
        <View style={styles.registerContainer}>
          {/* {isEditUserMode ? (
              <Text style={styles.header}>{strings.editGroup}</Text>
            ) : (
              <Text style={styles.header}>{strings.addUser}</Text>
            )} */}
          {/* {renderInputsAndErrors(inputArr, formikProps)} */}
          <Card style={styles.card}>
            <Card.Title
              title="Card Title"
              subtitle="Card Subtitle"
              left={LeftContent}
            />
            <Card.Content>
              <Text variant="titleLarge">Card title</Text>
              <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
          {/* <SubmitBtn
              title={isEditMode ? strings.editGroup : strings.addGroup}
              onPress={formikProps.handleSubmit}
              disabled={!formikProps.isValid}
            /> */}
        </View>
      )}
    </Formik>
  );
};

export default Register;
