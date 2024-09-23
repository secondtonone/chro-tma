import axios from 'axios';

import config from '@/config';

const customAxios = axios.create({
  baseURL: config.apiUrl,
});

export default customAxios;
