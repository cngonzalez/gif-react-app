import React from 'react';

const GifContainer = (props) => (
  <div>
  {props.displayPics.map(imgUrl => <img src={imgUrl} />)}
</div> 
)

export default GifContainer
