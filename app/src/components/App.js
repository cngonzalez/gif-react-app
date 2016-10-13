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
