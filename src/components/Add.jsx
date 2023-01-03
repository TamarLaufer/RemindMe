import {Formik} from 'formik';
import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import * as Yup from 'yup';
import {useContextData} from '../Context/ContextData';
import {styles} from '../styles/style';
import {formikValues, strings} from '../utils/Strings';
import SubmitBtn from './btn/SubmitBtn';

const Add = () => {
  const {
    addChild,
    showModal,
    setShowModal,
    popUp,
    child,
    getAllGroups,
    isEditMode,
    groups,
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
    group: Yup.object().required(strings.groupMissing),
  });

  const renderInputsAndError = (inputData = [], formikProps) => {
    return inputData?.map((input, index) => (
      <>
        <TextInput
          key={index}
          style={input.style}
          placeholder={input.placeholder}
          onChangeText={formikProps.handleChange(formikValues[input.value])}
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
      </>
    ));
  };

  const inputDataArray = [
    {
      style: styles.input,
      placeholder: strings.firstName,
      value: 'firstName',
      keyboardType: 'default',
    },
    {
      style: styles.input,
      placeholder: strings.lastName,
      value: 'lastName',
      keyboardType: 'default',
    },
    {
      style: styles.input,
      placeholder: strings.address,
      value: 'address',
      keyboardType: 'default',
    },
    {
      style: styles.input,
      placeholder: strings.parentPhone,
      value: 'parentPhone',
      keyboardType: 'phone-pad',
    },
    {
      style: styles.input,
      placeholder: strings.parent2Phone,
      value: 'parent2Phone',
      keyboardType: 'phone-pad',
    },
  ];

  const params = {
    formik: {
      initialValues: isEditMode ? child : initValues,
      validationSchema: SignupSchema,
      validateOnBlur: false,
      onSubmit: (values, actions) => {
        //EDIT ACTION
        if (isEditMode) {
          console.log('edit action');
        }
        //ADD ACTION
        else {
          console.log('values', values);
          addChild(values);
          actions.resetForm();
          popUp(strings.childAddedSeccesfully);
          setShowModal(!showModal);
        }
      },
    },
    dropDown: formikProps => ({
      style: [styles.dropdown, isFocus && {borderColor: 'blue'}],
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
          {renderInputsAndError(inputDataArray, formikProps)}
          <Dropdown {...params.dropDown(formikProps)} />
          <Text style={styles.validation_error}>
            {formikProps.touched &&
              formikProps.errors.group &&
              formikProps.errors.group}
          </Text>
          <SubmitBtn
            title={strings.addChild}
            onPress={formikProps.handleSubmit}
            disabled={!formikProps.isValid}
          />
        </View>
      )}
    </Formik>
  );
};

export default Add;
