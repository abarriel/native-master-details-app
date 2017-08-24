import React from 'react';
import { Provider } from 'react-redux';
import { loadCharacters } from './actions';
import { BG_COLOR } from './style';
import configureStore from './store';
import config from '../config';
import App from './component/App';

const initialState = {
  characters: {
    allCharacters: [],
    singleId: null,
    singleCharacter: [],
  },
  status: {
    isFetching: true,
  },
};
console.log('==================================');
console.log('==================================');
console.log('==================================');
const store = configureStore(initialState, config);

loadCharacters(store.dispatch);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
