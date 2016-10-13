import React from 'react';

export default function GifContainer(props) {
  var images = (props.pics).map(imgUrl => <img src={imgUrl} />)
  return (
    <div>
      {images}
    </div> 
  )
}
