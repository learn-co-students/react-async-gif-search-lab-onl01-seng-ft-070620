import React from 'react';

const GifList = (props) => {
  console.log(props)
  return(
    <div>
      <ul>
        {props.gifs.map(gif => <li><img key={gif.id} src={gif.url} alt="gif"/></li>) }
      </ul>
    </div>
  )
}

export default GifList

// export default class GifList extends Component {
//   render() {
//     return (
//       <ul>
//         {this.props.gifs.map(gif => <li><img src={gif.url} alt="gif"/></li> )}
//       </ul>
//     )
//   }
// }