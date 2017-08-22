import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { populateStoreMarvel } from './middlewares';
import reducers from '../reducers';

const logger = createLogger({
  duration: true,
  timestamp: false,
  collapsed: true,
});

const configureStore = (initialState, config) =>
  createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(
        thunk,
        populateStoreMarvel(config),
        logger,
      )));

export default configureStore;
