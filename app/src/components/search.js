import React from 'react';
import { connect } from 'react-redux'
import { fetchUrls } from '../actions/actions'

let Search = ({dispatch}) => 
  (
    <div>
      <input type='text' onChange={(e) => dispatch(fetchUrls(e.target.value)) } />
    </div>
  )

Search = connect()(Search)

export default Search

