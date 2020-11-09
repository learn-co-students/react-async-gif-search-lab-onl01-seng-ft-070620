import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {gifs: []}
  }

  fetchGIFs = (query='dolphins') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=RCggiRTvWrIwvmAza0208LKuRtp76cxN&limit=3`)
    .then(resp => resp.json())
    .then(jsObj => {
      this.setState({ gifs: jsObj.data.map(gif => gif.images.original.url) })
    })
  }

  componentDidMount() {
    this.fetchGIFs()
  }

  render() {
    return (
      <div>
        <GifSearch fetchGIFs={this.fetchGIFs} /><br></br>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

}
