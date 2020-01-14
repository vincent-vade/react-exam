/**
 * Created by thomashourlier on 2/26/17.
 */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducer';

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);
