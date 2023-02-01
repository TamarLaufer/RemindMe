import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {navigationRef} from './src/components/RootNavigation';
import {DataProvider, useContextData} from './src/Context/ContextData';
import AppNavigation from './src/navigation/AppNavigation';
import {Provider as PaperProvider} from 'react-native-paper';
import AuthStack from './src/navigation/AuthStack';
import AppNav from './src/navigation/AppNav';
import Loader from './src/components/Loader';

const App = () => {
  return (
    <DataProvider>
      <PaperProvider>
        <AppNav />
      </PaperProvider>
      <Loader />
    </DataProvider>
  );
};

export default App;
