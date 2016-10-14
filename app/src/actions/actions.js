export function receiveUrls(json) {
  return {
      type: 'FETCH_URLS',
      payload: (json.data).map(obj => obj.images.fixed_height.url)
    }
}

export function fetchUrls(currentSearch) {
  var term = (currentSearch).replace(" ", "+");
  var url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`;
  return function (dispatch) {
    console.log(dispatch)
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveUrls(json)))
  }
}

export function addToCollection(url) {
  return {
    type: 'ADD_URL',
    payload: url
  }
}

export function removeFromCollection(url) {
  return {
    type: 'REMOVE_URL',
    payload: url
  }
}

export function viewToggle() {
  return {
    type: 'VIEW_TOGGLE'
  }
}
