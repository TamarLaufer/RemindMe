import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useContextData} from '../Context/ContextData';
import {strings} from '../utils/Strings';
import OneChild from './OneChild';
import sizes from '../utils/sizes';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {styles} from '../styles/style';

const AllChildrenList = ({onPress}) => {
  const {
    childrenList,
    image,
    setShowModal,
    updateCurrentScreen,
    switchScreens,
  } = useContextData();

  const sortByStrAsc = [...childrenList].sort((a, b) =>
    a.lastName > b.lastName ? 1 : -1,
  );

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
      {childrenList.length > 0 ? (
        <View style={styles.container}>
          <Text style={styles.header}>{strings.chooseChild}</Text>
          <View>
            <FlatList
              numColumns={numColumns()}
              key={numColumns()}
              data={sortByStrAsc}
              renderItem={renderChildren}
              keyExtractor={item => item._id}
            />
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.header}>{strings.noChildrenInGroup}</Text>
          <TouchableOpacity
            style={styles.bigButton}
            onPress={() => {
              setShowModal(true);
              updateCurrentScreen(switchScreens.ADD_CHILD);
            }}>
            <Text style={styles.bigName}>{strings.addChild}</Text>
          </TouchableOpacity>
        </View>
      )}
    </ImageBackground>
  );
};

export default AllChildrenList;
