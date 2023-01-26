import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useState} from 'react';
import DrawerContent from '../components/DrawerContent';
import Header from '../components/Header';
import Logo from '../components/Logo';
import {screenNames} from '../utils/Strings';
import {styles} from '../styles/style';
import Register from '../components/Register';
import Login from '../components/Login';
import HomeSrcreen from '../components/HomeScreen';

const Drawer = createDrawerNavigator();

const AuthStack = props => {
  const [inRegister, setInRegister] = useState(true);
  const screens = [
    {
      name: screenNames.homeScreen,
      component: HomeSrcreen,
      options: {headerShown: false},
    },
    {
      name: screenNames.register,
      component: Register,
      options: {headerShown: false},
    },
    {
      name: screenNames.login,
      component: Login,
      options: {headerShown: false},
    },
  ];

  const renderScreens = (allScreens = []) => {
    return allScreens?.map((screen, index) => (
      <Drawer.Screen
        key={index}
        name={screen.name}
        component={screen.component}
        options={screen.option}
      />
    ));
  };
  // Drawer params
  const drawerParams = {
    initialRouteName: screenNames.homeScreen,
    drawerContent: props => <DrawerContent {...props} />,
    screenOptions: {
      headerShown: false,
      headerTitle: '',
      drawerType: 'front',
      headerRight: () => <Header />,
      drawerPosition: 'right',
      headerLeft: () => <Logo />,
      headerStyle: styles.headerStyle,
    },
  };

  return (
    <Drawer.Navigator {...drawerParams}>
      {renderScreens(screens)}
    </Drawer.Navigator>
  );
};
export default AuthStack;
