import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/',
  withCredentials: false,
});

export default apiClient;
