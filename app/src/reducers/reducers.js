export function picsReducer(state=[], action) {
  switch (action.type) {
      case 'FETCH_URLS': 
        return action.payload
      default:
        return state
  }
}

export function searchReducer(state = '', action) {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      return action.payload
    default:
      return state
  }
}

export function collectionReducer(state=[], action) {
  switch (action.type) {
    case 'ADD_URL':
      return [...state, action.payload]
    case 'REMOVE_URL':
      var i = state.indexOf(action.payload)
      var newState = state.slice(i, i) 
      return newState
    default:
      return state
  }
}

export function viewReducer(state='COLLECTION', action) {
  var newState = (state === 'COLLECTION') ? 'ALL' : 'COLLECTION'
  return newState
}
