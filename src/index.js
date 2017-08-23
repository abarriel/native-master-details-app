import React from 'react';
import { Provider } from 'react-redux';
import { loadCharacters } from './actions';
import { LIGHT_GREY } from './style';
import configureStore from './store';
import config from '../config';
import App from './component/App';

const initialState = {
  characters: {},
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
    <App styles={{ flex: 1, backgroundColor: LIGHT_GREY }} />
  </Provider>
);

export default Root;
