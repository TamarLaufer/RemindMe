import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  Icon,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Logo from './Logo';
import {strings, screenNames} from '../utils/Strings';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import sizes from '../utils/sizes';
import {RFValue} from 'react-native-responsive-fontsize';
import {styles} from '../styles/style';


const DrawerContent = props => {
  const screens = {
    GROUPS: 'groups',
    SETTINGS: 'settings',
  };
  const [active, setActive] = useState(screens.GROUPS);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Logo />
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label={strings.childrenGroups}
              onPress={() => {
                navigation.navigate(screenNames.groups);
                navigation.dispatch(DrawerActions.closeDrawer());
                setActive(screens.GROUPS);
              }}
              activeTintColor="#2196f3"
              activeBackgroundColor="#EFEFEF"
              style={active === screens.GROUPS && {backgroundColor: '#EFEFEF'}}
              labelStyle={styles.labelStyle}
            />
            <DrawerItem
              label={strings.settings}
              onPress={() => {
                navigation.navigate(screenNames.settings);
                setActive(screens.SETTINGS);
              }}
              style={
                active === screens.SETTINGS && {backgroundColor: '#EFEFEF'}
              }
              labelStyle={styles.labelStyle}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;
