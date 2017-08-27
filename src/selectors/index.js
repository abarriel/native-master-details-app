import { createSelector } from 'reselect';

const getStatus = state => state.status;
const getCharactersState = state => state.characters;

export const getFetchingState = createSelector([getStatus], state => state.isFetching);
export const getCharacters = createSelector([getCharactersState], state => state.allCharacters);
