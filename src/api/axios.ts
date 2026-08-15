import axios from "axios";
import NetInfo from "@react-native-community/netinfo";
import { showToast } from "../utils/toast";

export const apikey = "VT0UVOrek5gLJVTYBuHZwYJHnVI5juDI";
const commonConfig = {
  timeout: 60000,
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
};

export const authApi = axios.create({
  baseURL: "https://rechaz.excisofttech.com/app/api/",

  ...commonConfig,
});

export const rechargeApi = axios.create({
  baseURL: "https://apidev.excisofttech.com/",
  ...commonConfig,
});

const requestInterceptor = async (config) => {
  const net = await NetInfo.fetch();

  if (!net.isConnected) {
    showToast("error", "Connection issue", "No internet connection");
    return Promise.reject({ offline: true });
  }

  return config;
};

authApi.interceptors.request.use(requestInterceptor, (error) =>
  Promise.reject(error),
);

rechargeApi.interceptors.request.use(requestInterceptor, (error) =>
  Promise.reject(error),
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
//   baseURL: 'https://partner.excisofttech.com/app/api/',
//   ...commonConfig,
// });

// export const rechargeApi = axios.create({
//   baseURL: 'https://apidev.excisofttech.com/user_api_service/',
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
