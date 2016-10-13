import { combineReducers } from 'redux'
import { picsReducer} from './reducers'

const gifSearcher = combineReducers({
  displayPics: picsReducer
});

export default gifSearcher
