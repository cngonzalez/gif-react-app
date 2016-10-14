import React from 'react';
import Gif from './Gif'

const GifContainer = (props) => (
  <div>
    {props.displayPics.map((imgUrl, i) => <Gif 
      imgUrl={imgUrl} key={i}/>)}
</div> 
)

export default GifContainer
