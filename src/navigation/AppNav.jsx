import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from '../components/RootNavigation';
import AppNavigation from './AppNavigation';
import {useContextAuth} from '../Context/AuthContext';
import AuthStack from './AuthStack';
import Loader from '../components/Loader';

const AppNav = () => {
  const {userToken, isLoading} = useContextAuth();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {userToken !== null ? <AppNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;
