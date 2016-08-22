import { combineReducers } from 'redux';
import app from './app';
import modal from './modal';
import feeds from './feeds';
import favs from './favs';
import searchs from './searchs';

const rootReducer = combineReducers({
  app,
  modal,
  feeds,
  favs,
  searchs
});

export default rootReducer;
