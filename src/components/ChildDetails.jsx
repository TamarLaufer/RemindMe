import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useContextData} from '../Context/ContextData';

const ChildDetails = () => {
  const {childrenList} = useContextData();
  const [childData, setChildData] = useState();

  return (
    <View>
      <Text>{child.firstName}</Text>
      <Text>{child.lastName}</Text>
      <Text>{child.adrress}</Text>
      <Text>{child.parentPhone}</Text>
    </View>
  );
};

export default ChildDetails;
