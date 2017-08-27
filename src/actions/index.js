import axios from 'axios';
import { baseURL, apiPublic, charactersURL, getHashMd5 } from '../constants';

export const CHARACTERS_LOADED = 'CHARACTERS_LOADED';
export const LOAD_CHARACTERS = 'LOAD_CHARACTERS';

const loadCharactersSuccess = (characters) => ({ type: CHARACTERS_LOADED, payload: characters });

export const loadCharacters = (dispatch) => {
  const ts = Math.round(new Date() / 1000);
  axios({
    method: 'get',
    url: `${baseURL}${charactersURL}`,
    params: {
      apikey: apiPublic,
      ts,
      hash: getHashMd5(ts),
    },
  }).then(({ data: { data: { results } } }) => dispatch(loadCharactersSuccess(results)))
    .catch(err => console.error(err)); // eslint-disable-line no-console
};
