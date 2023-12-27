import axios from 'axios';

import { getToken } from '../lib/local-storage';
import { VITE_APP_API_URL } from '../constants';

const api = axios.create({ baseURL: VITE_APP_API_URL });

api.interceptors.request.use((config) => {
  const token = getToken();
  if (typeof token === 'string') {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

