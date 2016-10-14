import React from 'react'
import ToggleContainer from './containers/ToggleContainer'

const Gif = ({ imgUrl }) => (
  <div>
    <img src={imgUrl} />
    <ToggleContainer url={imgUrl} /> 
  </div>
)

export default Gif

