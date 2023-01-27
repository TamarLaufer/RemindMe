import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from '../components/RootNavigation';
import AppNavigation from './AppNavigation';
import AuthStack from './AuthStack';
import Loader from '../components/Loader';
import {useContextData} from '../Context/ContextData';

const AppNav = () => {
  const {userToken} = useContextData();

  return (
    <NavigationContainer ref={navigationRef}>
      {userToken !== null ? <AppNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;
