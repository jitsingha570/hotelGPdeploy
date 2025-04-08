import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hotelgpdeploy-backend.onrender.com', // replace this with your actual base URL if different
});

export default api;
