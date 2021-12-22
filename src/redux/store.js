import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { themeReducer } from './colorReducer';

export const store = createStore(
  combineReducers({ themeReducer }),
  applyMiddleware(thunk)
);
