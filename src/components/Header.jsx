import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import imageIndex from '../images/imageIndex';
import {openDrawer} from './RootNavigation';

const Header = () => {
  return (
    <TouchableOpacity onPress={openDrawer}>
      <Image
        style={{width: 45, height: 45, marginRight: 20}}
        source={imageIndex.menuIcon()}
      />
    </TouchableOpacity>
  );
};

export default Header;
