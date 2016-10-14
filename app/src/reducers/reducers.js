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
      return state.filter((url) => url != action.payload)
    default:
      return state
  }
}

export function viewReducer(state='ALL', action) {
  switch (action.type) {
    case 'VIEW_TOGGLE':
      var newState = (state === 'COLLECTION') ? 'ALL' : 'COLLECTION'
      return newState
    default:
      return state
  }
}
