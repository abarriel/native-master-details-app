import { combineReducers } from 'redux';
import characters from './characters';
import status from './status';

const reducer = combineReducers({
  characters,
  status,
});

export default reducer;
