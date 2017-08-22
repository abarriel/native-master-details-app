import axios from 'axios';
import { baseURL, apiPublic, charactersURL, getHashMd5 } from '../constants';

export const CHARACTERS_LOADED = 'CHARACTERS_LOADED';
export const LOAD_CHARACTERS = 'LOAD_CHARACTERS';

const loadCharactersSuccess = (characters) => ({ type: CHARACTERS_LOADED, payload: characters });

export const loadCharacters = (dispatch) => {
  const ts = Math.round(+new Date() / 1000);
  console.log(`${baseURL}${charactersURL}`);
  console.log('hash =', getHashMd5(ts));
  console.log('apikey=', apiPublic);
  console.log('ts=', ts);
  axios({
    method: 'get',
    url: `${baseURL}${charactersURL}`,
    params: {
      apikey: apiPublic,
      ts,
      hash: getHashMd5(ts),
    },
  }).then(res => {
    console.log('ok');
    console.log(res);
    dispatch(loadCharactersSuccess);
  }).catch(err => {
    console.log('AXIOS CATCH ERROR', err);
  });
};
