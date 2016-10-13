import { combineReducers } from 'redux'
import { picsReducer, collectionReducer } from './reducers'

const gifSearcher = combineReducers({
  displayPics: picsReducer,
  collection: collectionReducer
});

export default gifSearcher
