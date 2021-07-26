import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('userToken');

  const [token, setToken] = useState(initialToken);

  //Verificar si existe token
  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('userToken');
  };

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('userToken', token);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider values={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
