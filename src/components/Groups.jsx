import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useContextData} from '../Context/ContextData';
import {screenNames, strings} from '../utils/Strings';
import ScreensModal from './ScreensModal';
import {styles} from '../styles/style';
import Loader from './Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Groups = () => {
  const navigation = useNavigation();
  const {
    groups,
    image,
    user,
    getAllGroupsByUserId,
    showModal,
    setShowModal,
    getAllChildrenByGroup,
    updateCurrentScreen,
    switchScreens,
    loader,
    userInfo,
  } = useContextData();

  useEffect(() => {
    if (userInfo) {
      console.log('123123', userInfo);
      getAllGroupsByUserId(userInfo?._id);
    }
  }, [userInfo]);

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
      {groups.length > 0 ? (
        <View style={styles.container}>
          <Text>{`שלום ${userInfo.userName}`}</Text>
          <View style={styles.containerButtons}>
            <FlatList
              numColumns={2}
              data={groups}
              renderItem={renderGroup}
              keyExtractor={item => item._id}
              scrollToItem={{animated: true, viewPosition: 0.5}}
            />
          </View>
          {loader ? <Loader /> : null}
        </View>
      ) : (
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
          {loader ? <Loader /> : null}
        </View>
      )}
      {showModal && <ScreensModal />}
    </ImageBackground>
  );
};

export default Groups;
