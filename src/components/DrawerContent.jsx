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
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Logo style={styles.logoSize} />
            </View>
          </View>

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

const styles = StyleSheet.create({
  logoSize: {
    width: 180,
    height: 90,
    marginLeft: 15,
    marginBottom: 20,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  labelStyle: {fontSize: 24, fontFamily: 'Montserrat-Light'},
});
