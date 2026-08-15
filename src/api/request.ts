import { authApi, rechargeApi } from './axios';

export const GET = async <T>(url: string, params?: object): Promise<T> => {
  console.log('full url =>', `${authApi.defaults.baseURL}${url}${params}`);

  console.log('params =>', params);

  const res = await authApi.get(url, {
    params,
  });

  return res.data;
};
// export const GET = async <T>(url: string, params?: object): Promise<T> => {
//   console.log('full url =>', `${authApi.defaults.baseURL}${url}${params}`);

//   const res = await authApi.get(url, {
//     params,
//   });

//   console.log('request url =>', res);

//   return res.data;
// };

export const POST = async <T>(url: string, body?: any): Promise<T> => {
  const res = await authApi.post(url, body);
  return res.data;
};

export const PUT = async <T>(url: string, body?: any): Promise<T> => {
  const res = await authApi.put(url, body);
  return res.data;
};

export const DELETE = async <T>(url: string): Promise<T> => {
  const res = await authApi.delete(url);
  return res.data;
};

export const RECHARGE_GET = async <T>(
  url: string,
  params?: object,
): Promise<T> => {
  // console.log('urlaaaa', url);

  const res = await rechargeApi.get(url, { params });
  // console.log('urissssssss', url);

  return res.data;
};

// export const POST_FORM = async <T>(url: string, formData: FormData): Promise<T> => {
//   const res = await api.post(url, formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     },
//   });
//   return res.data;
// };

export const RECHARGE_POST = async <T>(
  url: string,
  params: Record<string, any>,
): Promise<T> => {
  const formData = new FormData();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      formData.append(key, String(value));
    }
  });
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  const res = await rechargeApi.post(url, formData, config);
  return res.data;
};

// export const POST_FORM = async <T>(
//   url: string,
//   params: Record<string, any>,
// ): Promise<T> => {
//   const formData = new FormData();
//   Object.entries(params).forEach(([key, value]) => {
//     if (value !== undefined && value !== null && value !== '') {
//       formData.append(key, String(value));
//     }
//   });
//   console.log('aaaaaaa', url, 'params', params);

//   const config = {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   };

//   const res = await authApi.post(url, formData, config);
//   return res.data;
// };

export const POST_FORM = async <T>(
  url: string,
  params: Record<string, any>,
): Promise<T> => {
  const formData = new FormData();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      formData.append(key, String(value));
    }
  });

  console.log('API URL:', `${authApi.defaults.baseURL}${url}`);

  console.log('API params:', JSON.stringify(params, null, 2));

  const res = await authApi.post(url, formData, {
    headers: {
      Accept: 'application/json',
    },
  });

  return res.data;
};
