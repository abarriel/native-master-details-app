import { createSelector } from 'reselect';
import R from 'ramda';

const getStatus = state => state.status;
const getCharactersState = state => state.characters;

export const getFetchingState = createSelector([getStatus], state => state.isFetching);
export const getCharacters = createSelector([getCharactersState], state => state.allCharacters);
export const getSingleCharacter = createSelector([getCharactersState], state => R.filter((characters => characters.id === state.singleId), state.allCharacters));
