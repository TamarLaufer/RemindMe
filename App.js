import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {navigationRef} from './src/components/RootNavigation';
import {DataProvider} from './src/Context/ContextData';
import AppNavigation from './src/navigation/AppNavigation';
import {Provider as PaperProvider} from 'react-native-paper';
import AuthStack from './src/navigation/AuthStack';
import AppNav from './src/navigation/AppNav';

const App = () => {
  return (
    <DataProvider>
      <PaperProvider>
        <AppNav />
      </PaperProvider>
    </DataProvider>
  );
};

export default App;
