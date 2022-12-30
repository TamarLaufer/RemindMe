import React, {useEffect, useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {Field, Formik} from 'formik';
import {screenNames, strings, formikValues} from '../utils/Strings';
import {useContextData} from '../Context/ContextData';
import {useNavigation, useNavigationParam} from '@react-navigation/native';
import {styles} from '../styles/style';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Add = ({route}, props) => {
  const {
    addChild,
    showModal,
    setShowModal,
    popUp,
    getAllGroups,
    groupList,
    classes,
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
  const [label, setLabel] = useState(null);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const newList = classes?.map(group => ({
    label: group.groupName,
    value: group._id,
  }));

  // console.log('classes', classes);
  return (
    <View style={styles.container}>
      <Formik
        initialValues={details}
        onSubmit={(values, actions) => {
          console.log('values', values);
          addChild(values);
          actions.resetForm();
          popUp(strings.childAddedSeccesfully);
          setShowModal(!showModal);
        }}>
        {formikProps => (
          <View>
            {/* {console.log('formikProps', formikProps)} */}
            <TextInput
              style={styles.input}
              placeholder={strings.firstName}
              onChangeText={formikProps.handleChange(formikValues.firstName)}
              value={formikProps.values.firstName}
            />

            <TextInput
              style={styles.input}
              placeholder={strings.lastName}
              onChangeText={formikProps.handleChange(formikValues.lastName)}
              value={formikProps.values.lastName}
            />

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
            />

            <TextInput
              style={styles.input}
              placeholder={strings.parent2Phone}
              onChangeText={formikProps.handleChange(formikValues.parent2Phone)}
              value={formikProps.values.parent2Phone}
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
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                console.log('item', item);
                formikProps.setFieldValue('group', item.value);
                // console.log(formikProps.values.group); //groupId
                setIsFocus(false);
              }}
            />
            <TouchableOpacity
              style={styles.bigButtonFormik}
              onPress={formikProps.handleSubmit}>
              <Text style={styles.bigName}>{strings.addChild}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Add;
