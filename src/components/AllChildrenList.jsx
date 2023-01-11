import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {useContextData} from '../Context/ContextData';
import {strings} from '../utils/Strings';
import OneChild from './OneChild';
import Loader from './Loader';
import sizes from '../utils/sizes';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const AllChildrenList = ({onPress}) => {
  const {childrenList, loader} = useContextData();

  const image = {
    uri: '../src/images/photo1.jpg',
  };

  const numColumns = () => {
    if (sizes.PageWidth < 400) {
      return 3;
    } else if (sizes.PageWidth > 400 && sizes.PageWidth < 700) {
      return 4;
    } else {
      return 5;
    }
  };

  const renderChildren = ({item}) => (
    <OneChild
      firstName={item.firstName}
      lastName={item.lastName}
      id={item._id}
      isArrived={item.isArrived}
    />
  );

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.header}>{strings.chooseChild}</Text>
        <FlatList
          numColumns={numColumns()}
          key={numColumns()}
          data={childrenList}
          renderItem={renderChildren}
          keyExtractor={item => item._id}
        />
        {loader ? <Loader /> : null}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: sizes.PageWidth,
    height: sizes.PageHieght,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: RFValue(10, sizes.PageHieght),
    color: '#3F4E4F',
    paddingBottom: 10,
    fontFamily: 'Fredoka-Medium',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default AllChildrenList;
