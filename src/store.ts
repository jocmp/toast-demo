import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import uiReducers, { UiState } from './reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  ui: uiReducers
});

export interface State {
  ui: UiState;
}

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

store.subscribe(() => console.log(store.getState()));