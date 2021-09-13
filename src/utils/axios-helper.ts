import { SMC_AUTH_TOKEN } from 'utils/common';
import axios from 'axios';
import _get from 'lodash/get';
import historyHelper from './history-helper';
import { getData as getLocalStorageData, removeAllData, storeData } from './local-storage-helper';

const axiosInstance = axios.create();

const refreshAccessToken = () => {
  const authInfo = getLocalStorageData(SMC_AUTH_TOKEN);
  const refreshToken = _get(authInfo, 'refreshToken', '');
  return axios.get(`${process.env.REACT_APP_API_URL}/auth/refresh-token`, {
    headers: {
      refresh_token: refreshToken,
    },
  });
};

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
  async (config) => {
    const authInfo = getLocalStorageData(SMC_AUTH_TOKEN);
    const refreshToken = _get(authInfo, 'refreshToken', '');
    const accessToken = _get(authInfo, 'token', '');
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
      'Content-Type': config.headers.isFormData ? 'multipart/form-data' : 'application/json',
      refresh_token: refreshToken,
      locale: 'en',
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// Response interceptor for API calls
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      const authInfo = getLocalStorageData(SMC_AUTH_TOKEN);
      originalRequest._retry = true;
      try {
        const res = await refreshAccessToken();
        const { accessToken, refreshToken } = res.data.data;
        axios.defaults.headers.common.Authorization = 'Bearer ' + accessToken;
        axios.defaults.headers.common.refresh_token = refreshToken;

        // Save tokens to Localstorage
        storeData(
          {
            authInfo,
            accessToken,
            refreshToken,
          },
          SMC_AUTH_TOKEN,
        );

        return axiosInstance(originalRequest);
      } catch (e) {
        removeAllData();
        historyHelper.push('/sign-out');
        window.location.reload();
        return Promise.reject(e);
      }
    }
    return Promise.reject(_get(error, 'response.data', ''));
  },
);

const fetch = axiosInstance;

export default fetch;
