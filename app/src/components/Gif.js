import React from 'react'
import CollectionToggle from './CollectionToggle'

const Gif = ({ imgUrl, onClick }) => (
  <div>
    <img src={imgUrl} />
    <CollectionToggle onClick={onClick} />
  </div>
)

export default Gif
