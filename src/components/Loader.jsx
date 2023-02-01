import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';
import {styles} from '../styles/style';
import {useContextData} from '../Context/ContextData';

const Loader = () => {
  const {loader} = useContextData();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loader === true ? setIsLoading(true) : setIsLoading(false);
  }, [loader]);

  if (!isLoading) return <View />;

  return (
    <View style={[StyleSheet.absoluteFillObject, styles.centeredViewLoader]}>
      <LottieView
        source={require('../assets/99571-loader-colors.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loader;
