import axios from 'axios';

export const AxiosInstance = axios.create({
  baseURL: import.meta.env.PROD
    ? import.meta.env.VITE_SERVER_API_URL
    : 'http://192.168.0.38:3000/',
  withCredentials: true,
});
