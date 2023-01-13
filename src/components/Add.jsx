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
    address: Yup.string(),
    parentPhone: Yup.string()
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        strings.validationPhone,
      )
      .required(strings.phoneMissing),
    group: Yup.object().required(strings.groupMissing),
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

  const renderInputsAndErrors = (inputData = [], formikProps) => {
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
          popUp(strings.groupUpdatedSeccesfully);
        } else {
          addChild(values);
          actions.resetForm();
          setShowModal(!showModal);
          popUp(strings.childAddedSeccesfully);
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

export default Add;
