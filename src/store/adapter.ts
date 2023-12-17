import axios from 'axios';

import { getToken } from '../lib/local-storage';

const api = axios.create({ baseURL: 'https://api.news.academy.dunice.net' });

api.interceptors.request.use((config) => {
  const token = getToken();
  if (typeof token === 'string') {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

