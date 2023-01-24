import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {navigationRef} from './src/components/RootNavigation';
import {DataProvider} from './src/Context/ContextData';
import AppNavigation from './src/navigation/AppNavigation';
import {Provider as PaperProvider} from 'react-native-paper';
import {
  AuthContext,
  AuthProvider,
  useContextAuth,
} from './src/Context/AuthContext';
import AuthStack from './src/navigation/AuthStack';
import AppNav from './src/navigation/AppNav';

const App = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <PaperProvider>
          <AppNav />
        </PaperProvider>
      </DataProvider>
    </AuthProvider>
  );
};

export default App;
