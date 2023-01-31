import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {navigationRef} from '../components/RootNavigation';
import AppNavigation from './AppNavigation';
import AuthStack from './AuthStack';
import Loader from '../components/Loader';
import {useContextData} from '../Context/ContextData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppNav = () => {
  const {setUserInfo, setUserToken, userToken} = useContextData();

  const isUserLoggedIn = async () => {
    try {
      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserToken(userInfo.data.token);
        console.log('userInfo.data.token', userInfo.data.token);
        setUserInfo(userInfo);
      }
    } catch (e) {
      console.log(`isLoggedIn error in ${e}`);
    }
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
