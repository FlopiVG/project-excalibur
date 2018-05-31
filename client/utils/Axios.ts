import axios from 'axios';

const { API_BASE_URL } = process.env;

export default axios.create({
  baseURL: API_BASE_URL,
});
