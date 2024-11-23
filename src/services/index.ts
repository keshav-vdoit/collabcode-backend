import axios, { AxiosInstance } from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;

const api: AxiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'x-api-key': import.meta.env.VITE_CLIENT_KEY,
  },
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    new Error(error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    new Error(error);
    return Promise.reject(error);
  }
);

export default api;
