import { axiosApiInstance, axiosLambdaS3Instance } from './axios';
import storage from './storage';
import constants from './constants';

export default {
  login: params => {
    return axiosApiInstance.post(
      '/login',
      {
        username: params.username,
        password: params.password,
        deviceUID: params.deviceUID,
        deviceOS: params.deviceOS,
        isMobile: params.isMobile,
        token: params.token
      },
      {
        authorization: false
      }
    );
  },

  countries: () => {
    return axiosApiInstance.get(
      '/countries',
      {},
      {
        authorization: false
      }
    );
  },

  videosAccess: () => {
    return axiosApiInstance.get('/videos/access');
  },

  videos: () => {
    return axiosApiInstance.get('/videos', { params: { _sort: 'id:ASC' } });
  },

  getImagesS3Signed: params => {
    params.id_token = storage.getItem(constants.DATA_COGNITO).idToken;

    return axiosLambdaS3Instance.post('', params);
  },

  nda: () => {
    return axiosApiInstance.get('/nda', {
      authorization: false
    });
  },

  signUp: params => {
    return axiosApiInstance.post('/sign-up', params, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },

  getPopularTags: () => {
    return axiosApiInstance.get('/tags?highlighted=1');
  },

  sendQuestion: params => {
    return axiosApiInstance.post('/questions', params);
  },

  logout: () => {
    return axiosApiInstance.post('/sign-out', {
      accessToken: storage.getItem(constants.DATA_COGNITO).accessToken
    });
  },

  getTags: params => {
    return axiosApiInstance.get('/tags', {
      params
    });
  },

  getCategories: params => {
    return axiosApiInstance.get('/categories', {
      params
    });
  },

  getQuestions: (params, paramsGet) => {
    const url = typeof paramsGet === 'undefined' ? '/questions' : `/questions?${paramsGet}`;

    return axiosApiInstance.get(url, {
      params
    });
  },

  forgetPassword: params => {
    return axiosApiInstance.post('/forget-password', params, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },

  changePassword: params => {
    return axiosApiInstance.post('/change-password', params, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },

  getQuestionById: id => {
    return axiosApiInstance.get(`/questions/${id}`);
  },

  getPublicVideo: () => {
    return axiosApiInstance.get(`/global-settings/video`, {
      authorization: false
    });
  },

  getHotIssues: params => {
    return axiosApiInstance.get('/hot-issues', {
      params
    });
  },

  getHotIssueById: id => {
    return axiosApiInstance.get(`/hot-issues/${id}`);
  },

  getHotIssueEnabled: id => {
    return axiosApiInstance.get('/hot-issues-enabled');
  }
};
