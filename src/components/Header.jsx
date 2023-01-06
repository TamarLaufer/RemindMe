import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import imageIndex from '../images/imageIndex';
import sizes from '../utils/sizes';
import {openDrawer} from './RootNavigation';

const Header = () => {
  return (
    <TouchableOpacity onPress={openDrawer}>
      <Image
        style={{
          width: sizes.PageWidth * 0.07,
          height: sizes.PageHieght * 0.08,
          marginRight: '9%',
        }}
        source={imageIndex.menuIcon()}
      />
    </TouchableOpacity>
  );
};

export default Header;
