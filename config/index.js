import { apiPrivate, apiPublic } from '../etc';

const config = {
  baseURL: 'https://gateway.marvel.com:443',
  apiPublic,
  apiPrivate,
  charactersURL: '/v1/public/characters',
};

export default config;
