import axios from 'axios';

const tokenHeader = `Bearer ${localStorage.getItem('token')}`;

const storeApi = axios.create({
  baseURL: 'http://127.0.0.1:7000/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    // TODO is it well?
    Authorization: tokenHeader || '',
  },
});

export default storeApi;
