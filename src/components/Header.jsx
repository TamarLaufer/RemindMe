import {DrawerActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <Image
        style={{width: 45, height: 45, marginRight: 20}}
        source={require('../images/icon.png')}
      />
    </TouchableOpacity>
  );
};

export default Header;
