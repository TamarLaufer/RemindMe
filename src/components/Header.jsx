import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native-animatable';
import {useContextData} from '../Context/ContextData';
import imageIndex from '../images/imageIndex';
import {styles} from '../styles/style';
import sizes from '../utils/sizes';
import {openDrawer} from './RootNavigation';

const Header = () => {
  const {userInfo} = useContextData();
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.welcomeHeader}>
        {userInfo && `שלום ${userInfo.userName}`}
      </Text>
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
    </View>
  );
};

export default Header;
