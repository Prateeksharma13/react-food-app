import { combineReducers } from 'redux';
import allItemsReducer from './reducer_allitems.js';

const rootReducers = combineReducers({
  all: allItemsReducer
});

export default rootReducers;
