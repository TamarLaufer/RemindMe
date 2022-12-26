import React, {useState} from 'react';
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
import {strings} from '../utils/Strings';

const Add = ({route}, props) => {
  const id = route?.params?.id;
  console.log('iddd', id);
  const {onSubmit} = props;
  const {addGroup} = useContextData();
  const [details, setDetails] = useState({
    groupName: '',
    assistentName: '',
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={details}
        onSubmit={(values, actions) => {
          addGroup(values);
          onSubmit();
          actions.resetForm();
          // ChildAddedPopUp();
        }}>
        {props => (
          <View>
            <TextInput
              style={styles.input}
              placeholder={strings.groupName}
              onChangeText={props.handleChange(strings.groupName)}
              value={props.values.groupName}
            />

            <TextInput
              style={styles.input}
              placeholder={strings.assistentName}
              onChangeText={props.handleChange(strings.assistentName)}
              value={props.values.assistentName}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={props.handleSubmit}>
              <Text style={styles.name}>{strings.addGroup}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    width: 1000,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#83A3C2',
    margin: 3,
    cursor: 'pointer',
  },
  name: {
    fontSize: 43,
    textAlign: 'center',
    color: '#EAEAEA',
  },
  input: {
    width: 1000,
    height: 70,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 6,
    fontSize: 26,
    margin: 7,
  },
});
export default Add;
