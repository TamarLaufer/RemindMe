import React, {useContext, useState} from 'react';

export const AuthContext = React.createContext();

export function useContextAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoding] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const login = () => {
    setUserToken(1245656);
    setIsLoding(false);
  };
  const logout = () => {
    setUserToken(null);
    setIsLoding(false);
  };

  return (
    <AuthContext.Provider value={{login, logout, userToken, isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};
