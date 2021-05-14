import axios from 'axios';

const api = axios.create({
  baseURL: process.env.STORIES_API_BASE_URL,
});

export default api;
