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
          width: sizes.PageWidth * 0.06,
          height: sizes.PageHieght * 0.07,
          marginRight: '4%',
        }}
        source={imageIndex.menuIcon()}
      />
    </TouchableOpacity>
  );
};

export default Header;
