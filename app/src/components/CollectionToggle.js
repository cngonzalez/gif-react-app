import React from 'react'

const CollectionToggle = (props) => (
  <div>
    <button onClick={() => props.onClick(props.url, props.collected)}> {props.message} </button>
  </div>
  )

export default CollectionToggle

