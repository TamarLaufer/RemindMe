import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './src/components/RootNavigation';
import {DataProvider} from './src/Context/ContextData';
import AppNavigation from './src/navigation/AppNavigation';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <DataProvider>
      <PaperProvider>
        <NavigationContainer ref={navigationRef}>
          <AppNavigation />
        </NavigationContainer>
      </PaperProvider>
    </DataProvider>
  );
};

export default App;
