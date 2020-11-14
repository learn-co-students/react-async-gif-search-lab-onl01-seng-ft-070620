import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  state = {
    gifs: []
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch fetchGifs={this.fetchGifs}/>
      </div>
    )
  }

  fetchGifs = (search) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(r => r.json())
    .then(({data}) => {
      this.setState({
        gifs: data.map(gif => ({ url: gif.images.original.url }))
      })
    })
  }

  componentDidMount() {
    this.fetchGifs()
  }

}