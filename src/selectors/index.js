import { createSelector } from 'reselect';

const getStateTodos = state => state;

export const getVisibleTodos = createSelector([getStateTodos], state => state);
