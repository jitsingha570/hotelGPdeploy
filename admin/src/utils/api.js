import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api', // replace this with your actual base URL if different
});

export default api;
