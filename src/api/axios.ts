import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import { showToast } from '../utils/toast';
import { store } from '../redux/store';
import { logout } from '../redux/Slices/authSlice';

export const apikey = 'VT0UVOrek5gLJVTYBuHZwYJHnVI5juDI';

const commonConfig = {
  timeout: 60000,
  headers: {
    Accept: 'application/json',
  },
  withCredentials: true,
};

export const authApi = axios.create({
  baseURL: 'https://rechaz.excisofttech.com/app/api/',
  ...commonConfig,
});

export const rechargeApi = axios.create({
  baseURL: 'https://apidev.excisofttech.com/',
  ...commonConfig,
});

const requestInterceptor = async config => {
  const net = await NetInfo.fetch();

  if (!net.isConnected) {
    showToast('error', 'Connection issue', 'No internet connection');

    return Promise.reject({ offline: true });
  }

  return config;
};

const responseInterceptor = async error => {
  const status = error?.response?.status;
  const url = error?.config?.url || '';

  if (status === 401) {
    console.log('401 Unauthorized:', url);

    // Don't logout for login/auth APIs
    const isAuthRequest =
      url.includes('login') ||
      url.includes('register') ||
      url.includes('verify_otp');

    if (!isAuthRequest) {
      console.log('Token expired/invalid → Logging out');

      store.dispatch(logout());
    }
  }

  return Promise.reject(error);
};

// Request interceptors
authApi.interceptors.request.use(requestInterceptor, error =>
  Promise.reject(error),
);

rechargeApi.interceptors.request.use(requestInterceptor, error =>
  Promise.reject(error),
);

// Response interceptors
authApi.interceptors.response.use(response => response, responseInterceptor);

rechargeApi.interceptors.response.use(
  response => response,
  responseInterceptor,
);

// import axios from 'axios';
// import NetInfo from '@react-native-community/netinfo';
// import { showToast } from '../utils/toast';

// export const apikey = 'VT0UVOrek5gLJVTYBuHZwYJHnVI5juDI';
// const commonConfig = {
//   timeout: 60000,
//   headers: {
//     Accept: 'application/json',
//   },
//   withCredentials: true,
// };

// export const authApi = axios.create({
//   baseURL: 'https://rechaz.excisofttech.com/app/api/',

//   ...commonConfig,
// });

// export const rechargeApi = axios.create({
//   baseURL: 'https://apidev.excisofttech.com/',
//   ...commonConfig,
// });

// const requestInterceptor = async config => {
//   const net = await NetInfo.fetch();

//   if (!net.isConnected) {
//     showToast('error', 'Connection issue', 'No internet connection');
//     return Promise.reject({ offline: true });
//   }

//   return config;
// };

// authApi.interceptors.request.use(requestInterceptor, error =>
//   Promise.reject(error),
// );

// rechargeApi.interceptors.request.use(requestInterceptor, error =>
//   Promise.reject(error),
// );
