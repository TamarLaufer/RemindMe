import {Formik} from 'formik';
import React, {useState, useEffect} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import * as Yup from 'yup';
import {useContextData} from '../Context/ContextData';
import {formikValues, strings} from '../utils/Strings';
import SubmitBtn from './btn/SubmitBtn';
import sizes from '../utils/sizes';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

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
  const [childValues, setChildValues] = useState(null);
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

  useEffect(() => {
    setChildValues(childParams);
  }, []);

  const renderInputsAndError = (inputData = [], formikProps) => {
    return inputData?.map((input, index) => (
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
      style: styles.input,
      placeholder: strings.parentPhone,
      value: formikValues.parentPhone,
      keyboardType: 'phone-pad',
    },
    {
      style: styles.input,
      placeholder: strings.parent2Phone,
      value: formikValues.parent2Phone,
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
          updateChild(childParams._id, values);
          actions.resetForm();
          setShowModal(!showModal);
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
            title={isEditMode ? strings.editChild : strings.addChild}
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
    fontSize: RFValue(12, sizes.PageHieght),
    marginRight: '2%',
  },
  addContainer: {
    flex: 1,
    paddingBottom: '3%',
    alignItems: 'center',
  },
  placeholderStyle: {
    fontSize: RFValue(17, sizes.PageHieght),
  },
  selectedTextStyle: {
    fontSize: RFValue(16, sizes.PageHieght),
  },
  inputSearchStyle: {
    width: sizes.PageWidth * 0.03,
    height: sizes.PageHieght * 0.03,
    fontSize: RFValue(22, sizes.PageHieght),
  },
  iconStyle: {
    width: sizes.PageWidth * 0.03,
    height: sizes.PageHieght * 0.03,
  },
  input: {
    width: sizes.PageWidth * 0.8,
    height: sizes.PageHieght * 0.09,
    borderWidth: 1,
    borderColor: 'black',
    padding: '1%',
    borderRadius: 26,
    fontSize: RFValue(20, sizes.PageHieght),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  dropdown: {
    width: sizes.PageWidth * 0.8,
    height: sizes.PageHieght * 0.09,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 26,
    paddingHorizontal: 8,
  },
});

export default Add;
