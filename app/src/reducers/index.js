import { combineReducers } from 'redux'
import picsReducer from './reducers'
import searchReducer from './reducers'

const gifSearcher = combineReducers({
  currentSearch: searchReducer,
  displayPics: picsReducer
});

export default gifSearcher
