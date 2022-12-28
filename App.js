import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './src/components/RootNavigation';
import {DataProvider} from './src/Context/ContextData';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer ref={navigationRef}>
        <AppNavigation />
      </NavigationContainer>
    </DataProvider>
  );
};

export default App;
