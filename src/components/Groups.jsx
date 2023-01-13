import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {string} from 'yup';
import {useContextData} from '../Context/ContextData';
import {screenNames, strings} from '../utils/Strings';
import ScreensModal from './ScreensModal';
import sizes from '../utils/sizes';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const Groups = () => {
  const navigation = useNavigation();
  const {groups, image, getAllGroups, showModal, getAllChildrenByGroup} =
    useContextData();

  useEffect(() => {
    getAllGroups();
  }, []);

  const OneButton = ({name, id}) => (
    <TouchableOpacity
      key={id}
      style={styles.bigButton}
      onPress={() => {
        getAllChildrenByGroup(id);
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
      {/* {listIsEmpty ? (
        <View style={styles.container}>
          <Text style={styles.header}>{strings.noGroups}</Text>
          <TouchableOpacity
            style={styles.bigButton}
            onPress={() => {
              setShowModal(true);
              updateCurrentScreen(switchScreens.ADD_GROUP);
            }}>
            <Text style={styles.bigName}>{strings.addGroup}</Text>
          </TouchableOpacity>
        </View>
      ) : ( */}
      <View style={styles.container}>
        <View style={styles.containerButtons}>
          <FlatList
            numColumns={2}
            data={groups}
            renderItem={renderGroup}
            keyExtractor={item => item._id}
            scrollToItem={{animated: true, viewPosition: 0.5}}
          />
        </View>
      </View>
      {/* )} */}
      {showModal && <ScreensModal />}
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
  containerButtons: {
    marginTop: '2%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigButton: {
    width: sizes.PageWidth * 0.4,
    height: sizes.PageHieght * 0.16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    backgroundColor: '#83A3C2',
    margin: '1%',
    shadowRadius: 20,
    shadowOpacity: 0.8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: -4},
    borderColor: '#83A3C2',
    color: 'black',
  },
  bigName: {
    fontSize: RFValue(25, sizes.PageWidth),
    textAlign: 'center',
    color: '#EAEAEA',
    fontFamily: 'Fredoka-Medium',
  },
});

export default Groups;
