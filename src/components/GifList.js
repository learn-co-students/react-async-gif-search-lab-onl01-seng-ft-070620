import React, {Component} from 'react'

export default class GifList extends Component {
  render() {
    return (
      <div>
        <ul>
          { this.props.gifs.map(gif => <img src={gif} alt='img' />) }
        </ul>
      </div>
    )
  }

}
