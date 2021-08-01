import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://superheroapi.com/api/4311045615613550/search/',
});

export default instance;
