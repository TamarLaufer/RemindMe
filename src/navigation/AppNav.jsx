import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {navigationRef} from '../components/RootNavigation';
import AppNavigation from './AppNavigation';
import AuthStack from './AuthStack';
import {useContextData} from '../Context/ContextData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppNav = () => {
  const {setUserInfo, setUserToken, userToken, setLoader} = useContextData();

  const isUserLoggedIn = async () => {
    setLoader(true);
    try {
      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserToken(userInfo.data.token);
        setUserInfo(userInfo);
      }
    } catch (e) {
      console.log(`isLoggedIn error in ${e}`);
    }
    setLoader(false);
  };

  useEffect(() => {
    console.log('userToken', userToken);
    isUserLoggedIn();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {userToken !== null ? <AppNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;
