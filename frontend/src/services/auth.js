import storage from './storage';
import constants from './constants';
import api from './api';
import handle from './handle';

const getUser = () => storage.getItem(constants.AUTH_USER);

const setUser = user => storage.setItem(constants.AUTH_USER, user);

const isLoggedIn = () => {
  const user = getUser();

  if (typeof user === 'object' && user !== null) {
    return Object.keys(user).length !== 0;
  }

  return !!user;
};

const logout = async callback => {
  setUser({});
  await handle(api.logout());
  clearStorage();
  if (callback) callback();
};

const clearStorage = () => {
  [constants.AUTH_USER, constants.JWT_TOKEN].forEach(item => storage.removeItem(item));
};

export default {
  getUser,
  setUser,
  isLoggedIn,
  logout,
  clearStorage
};
