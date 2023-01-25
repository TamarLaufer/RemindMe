import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useEffect, useState} from 'react';

export const AuthContext = React.createContext();

export function useContextAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoding] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = () => {
    setIsLoding(true);
    setUserToken('1245656asdefd98');
    AsyncStorage.setItem('userToken', '1245656asdefd98');
    setIsLoding(false);
  };

  const logout = () => {
    setIsLoding(true);
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    setIsLoding(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoding(true);
      const userToken = await AsyncStorage.getItem('userToken');
      setUserToken(userToken);
      setIsLoding(false);
    } catch (e) {
      console.log(`isLoggedIn error in ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{login, logout, userToken, isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};
