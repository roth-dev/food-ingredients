import axios, {
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios';
import BaseUrl from './BaseUrl';
import { Alert } from 'react-native';
import { LogcalStorage } from '../storage/LocalStorage';

axios.defaults.timeout = 30000;
axios.interceptors.response.use(
  response => response,
  error => {
    let reject = error;
    if (__DEV__) {
      console.log('dev', error.message);
    } else {
      const response = {
        url: error.response?.config.url,
        method: error.response?.config.method,
        status: error.response?.status,
        error: error.response?.data,
        data: error.response?.config.data,
      };
    }
    if (error.message === 'Request failed with status code 404' && !error.response) {
      reject = { response: { status: 404 } };
      Alert.alert("Error", error);
    } else if (error.message === 'timeout of 30000ms exceeded') {
      reject = { response: { status: 408 } };
      Alert.alert("Error", error);
    } else if (error.message === 'Network Error' || !error.response || error.response.status == 408) {
      reject = { response: { status: 408 } };
      // No Internet
      Alert.alert("Error", error);
    } else if (error.response?.status == 500) {
      reject = { response: { status: 500 } };
      // Oops! Something went wrong.
      Alert.alert("Error", error);
    }

    return Promise.reject(reject);
  }
);

interface IAPI {

  // token: () => string,
  baseUrl: () => string,

  get: <T = any>(url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>,
  delete: (url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<any>>,

  put: (url: string, data?: any, config?: AxiosRequestConfig) => Promise<AxiosResponse<any>>,
  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>,
}
const API: IAPI = {
  baseUrl: () => {
    return BaseUrl.getApi();
  },
  get: (url: string, config?: AxiosRequestConfig) => {
    axios.defaults.baseURL = API.baseUrl();
    return axios.get(url, config);
  },

  post: (url: string, data?: any, config?: AxiosRequestConfig) => {
    axios.defaults.baseURL = API.baseUrl();
    return axios.post(url, data, config);
  },

  put: (url: string, data?: any, config?: AxiosRequestConfig) => {
    axios.defaults.baseURL = API.baseUrl();
    return axios.post(url, data, config);
  },

  delete: (url: string, config?: AxiosRequestConfig) => {
    axios.defaults.baseURL = API.baseUrl();
    return axios.delete(url, config);
  }
}

export default API;