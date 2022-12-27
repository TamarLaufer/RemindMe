import {useNavigation, DrawerActions} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {useContextData} from '../Context/ContextData';
import {strings, screenNames} from '../utils/Strings';
import {styles} from '../styles/style';
import {navigationRef} from './RootNavigation';
// import {DrawerActions} from 'react-navigation-drawer';

const Groups = () => {
  const navigation = useNavigation();
  const {groupsList, image} = useContextData();

  const OneButton = ({name, id}) => (
    <TouchableOpacity
      key={id}
      style={styles.bigButton}
      onPress={() => {
        navigation.navigate(screenNames.allChildrenList);
      }}>
      <Text style={styles.bigName}>{name}</Text>
    </TouchableOpacity>
  );

  const renderGroup = ({item}) => (
    <OneButton name={item.groupName} id={item._id} />
  );

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          data={groupsList}
          renderItem={renderGroup}
          keyExtractor={item => item._id}
          scrollToItem={{animated: true, viewPosition: 0.5}}
        />
      </View>
    </ImageBackground>
  );
};

export default Groups;
