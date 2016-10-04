import React from 'react';
import Search from './Search';
import GifContainer from './GifContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSearch: "",
      displayPics: []
    }
    this.searchGiphy = this.searchGiphy.bind(this);
    this.parsePics = this.parsePics.bind(this);
  }
  searchGiphy(e) {
    term = (e.target.value).replace(" ", "+");
    fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`)
      .then(res => this.parsePics(res.json()));
  }
  parsePics() {
    debugger;
  }
  render() {
    return (
      <div>
        <Search search={this.searchGiphy} current={this.state.currentSearch}/>
        <GifContainer />
      </div>
    )
  }
};

export default App;
