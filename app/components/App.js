import React from 'react';
import Search from './Search';
import GifContainer from './GifContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSearch: "",
      displayPics: [],
      sampleRes: {}
    }
    this.searchGiphy = this.searchGiphy.bind(this);
    this.updateCurrent = this.updateCurrent.bind(this);
    this.parsePics = this.parsePics.bind(this);
  }
  searchGiphy() {
    var term = (this.state.currentSearch).replace(" ", "+");
    var url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`;
    fetch(url).then(res => res.json())
      .then(json => this.parsePics(json.data));
  }
  parsePics(gifObjects){
    var urls = gifObjects.map(obj => obj.images.fixed_height.url);
    this.setState({
      displayPics: urls
    });
  }
  updateCurrent(e) {
    this.setState({
      currentSearch: e.target.value
    });
  }
  render() {
    return (
      <div>
        <Search search={this.searchGiphy} current={this.state.currentSearch} updateCurrent={this.updateCurrent}/>
        <GifContainer pics={this.state.displayPics} />
      </div>
    )
  }
};

export default App;
