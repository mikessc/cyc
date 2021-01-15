import axios from 'axios';
import storage from './storage';
import constants from './constants';
import { stringify } from 'qs';
import { navigate } from 'gatsby';
import auth from './auth';

const apiUrl = process.env.GATSBY_API_URL;

const axiosApiInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    authorization: 'Bearer %s',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

const interceptorsRequestApi = config => {
  const token = storage.getItem(constants.JWT_TOKEN) || '';

  if (token && config.headers.authorization)
    config.headers.authorization = config.headers.authorization.replace('%s', token);
  else delete config.headers.authorization;

  if (config.authorization === false) delete config.headers.authorization;

  if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') config.data = stringify(config.data);

  return config;
};

const interceptorsResponseFailApi = error => {
  switch (error.response.status) {
    case 401:
      auth.clearStorage();
      navigate('/login', { replace: true });
      window.local.href = '/login';
      break;
    case 403:
      navigate('/app', { replace: true });
      window.local.href = '/app';
      break;
    default:
      break;
  }

  return Promise.reject(error);
};

axiosApiInstance.interceptors.request.use(interceptorsRequestApi, error => Promise.reject(error));
axiosApiInstance.interceptors.response.use(response => response, interceptorsResponseFailApi);

export { axiosApiInstance, axiosLambdaS3Instance };
