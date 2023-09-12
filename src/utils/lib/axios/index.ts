import axios from 'axios';

export const AxiosInstanceToFlask = axios.create({
  baseURL: import.meta.env.PROD
    ? import.meta.env.VITE_FLASK_API_URL
    : 'http://192.168.0.38:5001/',
  withCredentials: true,
});

export const AxiosInstanceToNest = axios.create({
  baseURL: import.meta.env.PROD
    ? import.meta.env.VITE_NEST_API_URL
    : 'http://192.168.0.38:3000/',
  withCredentials: true,
});
