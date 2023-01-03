import {StyleSheet} from 'react-native';
import sizes from '../utils/sizes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  modalContainer: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsContainer: {
    flex: 1,
    flexWrap: 'wrap',
    maxHeight: 400,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 200,
  },
  bigButton: {
    width: sizes.PageWidth * 0.4,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#83A3C2',
    margin: 11,
    shadowOpacity: 0.8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: -4},
    shadowRadius: 3,
  },
  bigName: {
    fontSize: 32,
    textAlign: 'center',
    color: '#EAEAEA',
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  header: {
    fontSize: 23,
    color: '#3F4E4F',
    paddingBottom: 12,
  },
  image: {
    flex: 1,
    // justifyContent: 'space-around',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: 2, height: -4},
    shadowOpacity: 2,
    shadowRadius: 3,
  },
  elevation: {
    elevation: 20,
    shadowColor: 'black',
  },
  buttonHover: {
    marginTop: 10,
    borderRadius: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 50,
    paddingRight: 50,
    shadowColor: 'rgba(46, 229, 157, 0.4)',
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20,
    shadowOffset: {width: 1, height: 13},
    backgroundColor: '#2EE59D',
    color: '#FFFFFF',
  },
  activeButton: {
    width: 222,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#83A3C2',
    margin: 10,
    padding: 1,
    shadowOpacity: 0.8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: -4},
    shadowRadius: 3,
  },
  notActiveButton: {
    width: 222,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin: 11,
    shadowOpacity: 0.8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: -4},
    shadowRadius: 3,
    backgroundColor: '#fff',
  },
  childName: {
    fontSize: 30,
    textAlign: 'center',
    color: '#EAEAEA',
  },
  bigButtonFormik: {
    width: sizes.PageWidth * 0.9,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#D8D8D8',
    margin: 11,
    shadowOpacity: 0.8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: -4},
    shadowRadius: 3,
  },
  bigButtonFormikNotActive: {
    backgroundColor: '#83A3C2',
  },
  input: {
    width: sizes.PageWidth * 0.9,
    height: 75,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    // paddingRight: 20,
    borderRadius: 26,
    fontSize: 26,
    margin: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredViewLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  modalView: {
    width: sizes.PageWidth,
    // height: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    borderRadius: 20,
    width: 40,
    alignSelf: 'center',
    padding: 10,
    fontSize: 45,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonOpen: {
    // backgroundColor: '#F194FF',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
  },
  modalText: {
    marginBottom: 5,
    textAlign: 'center',
  },
  logoSize: {
    width: 230,
    height: 100,
    marginLeft: 5,
    // marginBottom: 15,
  },
  headerStyle: {
    backgroundColor: '#F4F4F2',
    height: 130,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  headerStyle: {
    backgroundColor: '#F4F4F2',
    height: 130,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  dropdown: {
    marginTop: 10,
    width: sizes.PageWidth * 0.9,
    height: 75,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 26,
    paddingHorizontal: 8,
    marginLeft: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 26,
    borderColor: 'black',
    borderWidth: 1,
  },
  placeholderStyle: {
    fontSize: 26,
  },
  selectedTextStyle: {
    fontSize: 26,
  },
  iconStyle: {
    width: 40,
    height: 40,
  },
  inputSearchStyle: {
    width: 1000,
    height: 75,
    fontSize: 26,
  },
  validation_error: {
    color: 'red',
    fontSize: 22,
    marginRight: 23,
  },
  keyboardAwareScrollView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  addContainer: {
    flex: 1,
    paddingBottom: 15,
    alignItems: 'center',
  },
});
