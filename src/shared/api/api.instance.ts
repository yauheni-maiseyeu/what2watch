import axios from 'axios';

const BASE_URL = 'https://cinemaguide.skillbox.cc/';

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
