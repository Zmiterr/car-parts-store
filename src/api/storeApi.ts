import axios from 'axios';

const tokenHeader = `Bearer ${localStorage.getItem('token')}`;

const storeApi = axios.create({
  baseURL: `${process.env.SERVER}:${process.env.PORT}/`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: tokenHeader,
  },
});

export default storeApi;
