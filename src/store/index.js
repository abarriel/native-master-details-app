import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import reducers from '../reducers';

// const logger = createLogger({
//   duration: true,
//   timestamp: false,
//   collapsed: true,
//   logTransitions: false,
// });

const configureStore = (initialState, config) =>
  createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(
        thunk,
      )));

export default configureStore;
