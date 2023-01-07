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
import {styles} from '../styles/style';
import Loader from './Loader';
import sizes from '../utils/sizes';

const AllChildrenList = ({onPress}) => {
  const {childrenList, getAllChildren, loader} = useContextData();

  const image = {
    uri: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
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

  useEffect(() => {
    getAllChildren();
    console.log(numColumns());
  }, []);

  const renderChildren = ({item}) => (
    <OneChild
      firstName={item.firstName}
      lastName={item.lastName}
      id={item._id}
      onPress={onPress}
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

export default AllChildrenList;
