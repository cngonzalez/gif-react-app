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
