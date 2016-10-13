export function fetchUrls(currentSearch) {
    var term = (currentSearch).replace(" ", "+");
    var url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`;
    const gifUrls = fetch(url).then(res => res.json())
    .then(json => json.data.map(obj => obj.images.fixed_height.url));
    
    return {
      type: 'FETCH_URLS',
      payload: gifUrls
    }
  }


  // function parsePics(gifObjects){
  //   var urls = gifObjects.map(obj => obj.images.fixed_height.url);
  //   this.setState({
  //     displayPics: urls
  //   });
  // }


export function updateCurrent(e) {
  return {type: 'UPDATE_SEARCH', payload: e.target.value}
  }
