import React, { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import storage from '../services/storage';
import constants from '../services/constants';

const apiURL = process.env.GATSBY_API_URL;

const DEFAULT_STATE = {
  jwt: null,
  user: {},
  loggedIn: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      const { jwt = null, user = {} } = action.payload;
      storage.setItem(constants.JWT_TOKEN, jwt);
      storage.setItem(constants.AUTH_USER, user);
      storage.setItem(constants.LOGGED, true);
      return { ...state, jwt, user, loggedIn: true };
    case 'LOGOUT':
      storage.removeItem(constants.JWT_TOKEN);
      storage.removeItem(constants.AUTH_USER);
      storage.removeItem(constants.LOGGED, false);
      return { ...state, jwt: null, user: {}, loggedIn: false };
    default:
      return DEFAULT_STATE;
  }
};

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // prettier-ignore
  return (
  <AuthContext.Provider value={useReducer(reducer, DEFAULT_STATE)}>
    {children}
  </AuthContext.Provider>
  )
};

export const wrapRootElement = ({ element }) => <AuthProvider>{element}</AuthProvider>;

const useAuth = () => {
  const [state, dispatcher] = useContext(AuthContext);
  //const isAuthenticated = state.loggedIn && Object.keys(state.user).length;
  const isAuthenticated = storage.getItem(constants.LOGGED);
  //const [isAuthenticated, authenticate] = useState(false);

  const login = async credentials =>
    new Promise(async (resolve, reject) => {
      try {
        const { data: payload } = await axios.post(`${apiURL}/auth/local`, credentials);
        dispatcher({ type: 'LOGIN', payload });
        resolve(payload);
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  const logout = () => {
    dispatcher({ type: 'LOGOUT' });
  };

  return { state, isAuthenticated, login, logout };
};

export default useAuth;
