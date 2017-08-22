import { LOAD_CHARACTERS, CHARACTERS_LOADED } from '../actions/';

export const populateStoreMarvel = (config) => () => next => action => {
  switch (action.type) {
    case CHARACTERS_LOADED:
    {
      console.log('characters succefuly loaded');
      return 'ok';
    }
    default:
      return next(action);
  }
};
