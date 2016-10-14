import React from 'react'
import { connect } from 'react-redux'
import { viewToggle } from '../actions/actions'

let ViewToggle = ({dispatch}) => (
  <div>
    <button onClick={(e) => dispatch(viewToggle())}>Change my view</button>
  </div>
)

ViewToggle = connect()(ViewToggle)

export default ViewToggle
