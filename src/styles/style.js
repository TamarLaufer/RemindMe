import {StyleSheet} from 'react-native';
import sizes from '../utils/sizes';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  registerContainer: {
    width: sizes.PageWidth,
    height: sizes.PageHieght,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardContent: {
    marginBottom: '6%',
    width: sizes.PageWidth * 0.7,
    height: sizes.PageHieght * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    margin: sizes.PageHieght * 0.04,
    width: sizes.PageWidth * 0.7,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#ECECEC',
  },
  input_Register: {
    textAlign: 'right',
    backgroundColor: 'white',
    width: sizes.PageWidth * 0.5,
    height: sizes.PageHieght * 0.08,
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: sizes.PageWidth * 0.02,
    paddingRight: sizes.PageWidth * 0.02,
    borderRadius: 30,
    fontSize: sizes.PageHieght * 0.038,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: sizes.PageWidth * 0.9,
  },
  settingsContainer: {
    flex: 1,
    flexWrap: 'wrap',
    maxHeight: 400,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 200,
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
    width: sizes.PageWidth * 0.14,
    height: sizes.PageHieght * 0.14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#83A3C2',
    opacity: 0.8,
    margin: '1.2%',
    padding: '1.2%',
    shadowOpacity: 0.8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: -4},
    shadowRadius: 3,
  },
  notActiveButton: {
    width: sizes.PageWidth * 0.14,
    height: sizes.PageHieght * 0.14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: '1.2%',
    padding: '1.2%',
    shadowOpacity: 0.8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: -4},
    shadowRadius: 3,
    backgroundColor: '#fff',
    borderColor: '#83A3C2',
    color: 'black',
  },
  childName: {
    fontSize: sizes.PageWidth * 0.022,
    textAlign: 'center',
    color: '#EAEAEA',
    fontFamily: 'Fredoka-Medium',
  },
  childArrived: {
    fontSize: sizes.PageWidth * 0.022,
    textAlign: 'center',
    color: '#3F4E4F',
    fontFamily: 'Fredoka-Medium',
  },
  centeredViewLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  centeredViewLoaderHome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  lottieHome: {
    width: sizes.PageWidth * 0.35,
    height: sizes.PageHieght * 0.35,
  },
  modalView: {
    width: sizes.PageWidth,
    minHeight: 600,
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input_phone: {
    textAlign: 'right',
    backgroundColor: 'white',
    width: sizes.PageWidth * 0.8,
    height: sizes.PageHieght * 0.12,
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: sizes.PageWidth * 0.02,
    paddingRight: sizes.PageWidth * 0.02,
    borderRadius: 30,
    fontSize: sizes.PageHieght * 0.038,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    color: 'black',
    marginTop: sizes.PageWidth * 0.02,
  },
  imageModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: sizes.PageWidth * 0.98,
  },
  logoSize: {
    maxWidth: sizes.PageWidth * 0.2,
    maxHeight: sizes.PageHieght * 0.2,
    marginLeft: '10%',
    marginBottom: '7%',
  },
  logoSizeHome: {
    maxWidth: sizes.PageWidth * 0.25,
    maxHeight: sizes.PageHieght * 0.25,
  },
  logoAndHeadeRegister: {
    marginRight: '40%',
    flexDirection: 'row',
    width: sizes.PageWidth * 0.5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  logoAndHeadeLogin: {
    marginRight: '40%',
    marginBottom: '10%',
    flexDirection: 'row',
    width: sizes.PageWidth * 0.5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  inputRegisterContainer: {
    width: sizes.PageWidth * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  logoSizeRegister: {
    width: sizes.PageWidth * 0.18,
    height: sizes.PageHieght * 0.18,
    // marginBottom: '8%',
    // marginLeft: '7%',
  },
  headerStyle: {
    backgroundColor: '#F4F4F2',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    height: sizes.PageHieght * 0.2,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: sizes.PageWidth * 0.03,
    borderColor: 'black',
    borderWidth: 1,
  },
  keyboardAwareScrollView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  containerButtons: {
    marginTop: '2%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: sizes.PageWidth,
    borderRadius: 20,
  },
  bigButton: {
    width: sizes.PageWidth * 0.4,
    height: sizes.PageHieght * 0.16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    backgroundColor: '#83A3C2',
    opacity: 0.8,
    margin: '1%',
    shadowRadius: 20,
    shadowOpacity: 0.8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: -4},
    borderColor: '#83A3C2',
  },
  bigName: {
    fontSize: sizes.PageWidth * 0.03,
    textAlign: 'center',
    color: '#EAEAEA',
    fontFamily: 'Fredoka-Medium',
  },
  nameRegister: {
    fontSize: sizes.PageWidth * 0.026,
    textAlign: 'center',
    color: '#EAEAEA',
    fontFamily: 'Fredoka-Medium',
  },
  registerButton: {
    marginTop: sizes.PageHieght * 0.02,
    marginBottom: sizes.PageHieght * 0.02,
    width: sizes.PageWidth * 0.25,
    height: sizes.PageHieght * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    backgroundColor: '#83A3C2',
    opacity: 0.8,
    shadowRadius: 20,
    shadowOpacity: 0.8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: -4},
    borderColor: '#83A3C2',
  },
  placeholderStyle: {
    fontSize: sizes.PageWidth * 0.022,
    color: 'black',
  },
  selectedTextStyle: {
    fontSize: sizes.PageWidth * 0.022,
    color: 'black',
  },
  validation_error: {
    color: 'red',
    fontSize: sizes.PageWidth * 0.015,
    paddingRight: sizes.PageWidth * 0.01,
  },
  addContainer: {
    flex: 1,
    marginBottom: sizes.PageWidth * 0.04,
    alignItems: 'center',
  },
  inputSearchStyle: {
    width: sizes.PageWidth * 0.01,
    height: sizes.PageHieght * 0.03,
    fontSize: sizes.PageWidth * 0.022,
    color: 'black',
  },
  iconStyle: {
    width: sizes.PageWidth * 0.02,
    height: sizes.PageHieght * 0.03,
  },
  input: {
    backgroundColor: 'white',
    width: sizes.PageWidth * 0.8,
    height: sizes.PageHieght * 0.12,
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: sizes.PageWidth * 0.02,
    paddingRight: sizes.PageWidth * 0.02,
    borderRadius: 30,
    fontSize: sizes.PageHieght * 0.038,
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
    backgroundColor: 'white',
  },
  header: {
    paddingTop: sizes.PageWidth * 0.02,
    fontSize: sizes.PageWidth * 0.025,
    color: '#3F4E4F',
    paddingBottom: sizes.PageHieght * 0.02,
    fontFamily: 'Fredoka-Medium',
  },
  smallHeader: {
    // paddingTop: sizes.PageWidth * 0.02,
    fontSize: sizes.PageWidth * 0.02,
    color: '#3F4E4F',
    // paddingBottom: sizes.PageHieght * 0.02,
    fontFamily: 'Fredoka-Medium',
  },
  container: {
    width: sizes.PageWidth,
    height: sizes.PageHieght,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: sizes.PageWidth * 0.02,
    fontFamily: 'Montserrat-Light',
  },
  title: {
    fontSize: 16,
    marginTop: 1,
    fontWeight: 'bold',
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: sizes.PageHieght * 0.05,
  },
  drawerContent: {
    flex: 1,
    height: sizes.PageHieght * 2,
  },
  close: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'right',
    backgroundColor: '#ffff',
  },
  modalButton: {
    borderRadius: 20,
    width: sizes.PageWidth * 0.95,
    height: sizes.PageHieght * 0.1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  bigButtonFormik: {
    width: sizes.PageWidth * 0.8,
    height: sizes.PageHieght * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#83A3C2',
    shadowOpacity: 0.8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: -4},
    shadowRadius: 3,
    marginTop: sizes.PageHieght * 0.08,
    padding: sizes.PageHieght * 0.02,
  },
  bigButtonFormikNotActive: {
    backgroundColor: '#D8D8D8',
    width: sizes.PageWidth * 0.8,
    height: sizes.PageHieght * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowOpacity: 0.8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: -4},
    shadowRadius: 3,
    marginTop: sizes.PageHieght * 0.08,
    padding: sizes.PageHieght * 0.02,
  },
});
