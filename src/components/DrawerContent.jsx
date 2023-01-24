import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
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
import {useContextAuth} from '../Context/AuthContext';

const DrawerContent = props => {
  const screens = {
    GROUPS: 'groups',
    SETTINGS: 'settings',
  };
  const [active, setActive] = useState(screens.GROUPS);
  const navigation = useNavigation();
  const {logout} = useContextAuth();

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Logo />
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={() => (
                <Avatar.Icon
                  size={46}
                  icon="account-multiple"
                  style={styles.close}
                  backgroundColor={'none'}
                />
              )}
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
              icon={() => (
                <Avatar.Icon size={36} icon="cog" style={styles.close} />
              )}
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
          <TouchableOpacity
            // style={styles.registerrButton}
            onPress={() => {
              logout;
            }}>
            <Text style={styles.nameRegister}>{strings.logout}</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;
