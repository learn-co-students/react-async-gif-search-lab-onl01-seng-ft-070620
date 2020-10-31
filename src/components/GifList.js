import React from 'react';

const GifList = (props) => {
  return (
    <div>
      {props.images.map((image, index) => <img src={image.url} key={index} /> )}
    </div>
  )
}

export default GifList 