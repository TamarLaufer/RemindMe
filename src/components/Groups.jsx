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
import {styles} from '../styles/style';
import {screenNames} from '../utils/Strings';

const Groups = () => {
  const navigation = useNavigation();
  const {classes, image, getAllGroups} = useContextData();

  useEffect(() => {
    getAllGroups();
  }, []);

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
          data={classes}
          renderItem={renderGroup}
          keyExtractor={item => item._id}
          scrollToItem={{animated: true, viewPosition: 0.5}}
        />
      </View>
    </ImageBackground>
  );
};

export default Groups;
