import { CHARACTERS_LOADED, LOAD_SINGLE_CHARACTER } from '../actions/';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case CHARACTERS_LOADED:
      return { ...state, allCharacters: action.payload };
    case LOAD_SINGLE_CHARACTER:
    {
      return { ...state, singleId: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
