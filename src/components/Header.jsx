import {DrawerActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {openDrawer} from './RootNavigation';
import * as RootNavigation from '../components/RootNavigation';

const Header = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={openDrawer}>
      <Image
        style={{width: 45, height: 45, marginRight: 20}}
        source={require('../images/icon.png')}
      />
    </TouchableOpacity>
  );
};

export default Header;
