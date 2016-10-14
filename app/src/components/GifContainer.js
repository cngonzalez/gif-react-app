import React from 'react';
import Gif from './Gif'

const GifContainer = (props) => (
  <div>
    {props.displayPics.map(imgUrl => <Gif 
      imgUrl={imgUrl}
      onClick={() => props.onClick(imgUrl)}/>)}
</div> 
)

export default GifContainer
