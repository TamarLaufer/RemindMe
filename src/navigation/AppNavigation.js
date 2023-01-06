import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Add from '../components/Add';
import AllChildrenList from '../components/AllChildrenList';
import ChildrenListForEdit from '../components/ChildrenListForEdit';
import DrawerContent from '../components/DrawerContent';
import EditChild from '../components/EditChild';
import EditGroup from '../components/EditGroup';
import Groups from '../components/Groups';
import Header from '../components/Header';
import Logo from '../components/Logo';
import RemoveChild from '../components/RemoveChild';
import RemoveGroup from '../components/RemoveGroup';
import Settings from '../components/Settings';
import {screenNames} from '../utils/Strings';
import AddGroup from '../../src/components/AddGroup';
import {styles} from '../styles/style';
import GroupListForEdit from '../components/GroupListForEdit';
import sizes from '../utils/sizes';

const Drawer = createDrawerNavigator();

const AppNavigation = props => {
  // list of all screen
  const screens = [
    {
      name: screenNames.groups,
      component: Groups,
      options: {headerTitle: false},
    },
    {
      name: screenNames.settings,
      component: Settings,
      options: {headerTitle: false},
    },
    {
      name: screenNames.allChildrenList,
      component: AllChildrenList,
      options: {headerTitle: false},
    },
    {
      name: screenNames.addChild,
      component: Add,
      options: {headerTitle: false},
    },
    {
      name: screenNames.editChild,
      component: EditChild,
      options: {headerTitle: false},
    },
    {
      name: screenNames.removeChild,
      component: RemoveChild,
      options: {headerTitle: false},
    },
    {
      name: screenNames.addGroup,
      component: AddGroup,
      options: {headerTitle: false},
    },
    {
      name: screenNames.childrenListForEdit,
      component: ChildrenListForEdit,
      options: {headerTitle: false},
    },
    {
      name: screenNames.groupListForEdit,
      component: GroupListForEdit,
      options: {headerTitle: false},
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
    initialRouteName: screenNames.groups,
    drawerContent: props => <DrawerContent {...props} />,
    screenOptions: {
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
export default AppNavigation;

