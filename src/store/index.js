import {createStore, combineReducers} from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './cutomerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
})
export const store = createStore(rootReducer, composeWithDevTools())