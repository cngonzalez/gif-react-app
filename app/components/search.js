import React from 'react';

class Search extends React.Component {
  render() {
     return (
      <input type='text' onChange={this.props.search} value={this.props.current}/>
    )
   }

}

export default Search; 
