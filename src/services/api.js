import axios from 'axios';

const api = axios.create({
  baseURL: 'https://example.com',
});

export default api;
