import { CHARACTERS_LOADED } from '../actions/';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case CHARACTERS_LOADED:
      return { ...state, allCharacters: action.payload };
    default:
      return state;
  }
};

export default reducer;
