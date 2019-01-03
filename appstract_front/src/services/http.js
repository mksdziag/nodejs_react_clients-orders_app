import axios from 'axios';
import { baseURL } from '../config/restApi.json';

axios.defaults.baseURL = baseURL;

export default {
  get: axios.get,
  post: axios.post,
};
