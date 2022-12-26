import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Text, ImageBackground} from 'react-native';
import {useContextData} from '../Context/ContextData';
import {strings} from '../utils/Strings';
import OneChild from './OneChild';
import {styles} from '../styles/style';

const AllChildrenList = ({onPress}) => {
  const {childrenList} = useContextData();
  // const navigation = useNavigation();
  const image = {
    uri: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
  };

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
          numColumns={5}
          key={5}
          data={childrenList}
          renderItem={renderChildren}
          keyExtractor={item => item.id}
        />
      </View>
    </ImageBackground>
  );
};

export default AllChildrenList;
