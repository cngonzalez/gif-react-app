export function fetchUrls(currentSearch) {
    var term = (currentSearch).replace(" ", "+");
    var url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`;
    const gifUrls = fetch(url).then(res => res.json())
    .then(json => parsePics(json.data));
    
    return {
      type: 'FETCH_URLS',
      payload: gifUrls
    }
  }


  function parsePics(gifObjects){
    return gifObjects.map(obj => obj.images.fixed_height.url);
  }


// export function updateCurrent(e) {
//   return {type: 'UPDATE_SEARCH', payload: e.target.value}
//   }
