import { combineReducers } from 'redux'
import {viewReducer, picsReducer, collectionReducer } from './reducers'

const gifSearcher = combineReducers({
  searchPics: picsReducer,
  collection: collectionReducer,
  currentView: viewReducer
});

export default gifSearcher
