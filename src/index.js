import React from 'react';
import { Provider } from 'react-redux';
import { loadCharacters } from './actions';
import configureStore from './store';
import Navigator from './navigator';

const initialState = {
  characters: {
    allCharacters: [],
  },
  status: {
    isFetching: true,
  },
};

const store = configureStore(initialState);

loadCharacters(store.dispatch);

const Root = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default Root;
