import { combineReducers } from 'redux'
import { picsReducer, searchReducer} from './reducers'

const gifSearcher = combineReducers({
  currentSearch: searchReducer,
  displayPics: picsReducer
});

export default gifSearcher
