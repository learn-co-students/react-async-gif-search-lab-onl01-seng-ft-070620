import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  fetchImages = async (term) => {
    const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=3r40ashS9EWt8i3jW3ylJ6XFZReeTYMbJGeqeOYguOY&query=${term}`)
    const data = await response.json()
    this.setState({ gifs: data.results.map(image => ({ url: image.urls.small })) })
  }

  render() {
    return (
      <div>
        <GifSearch getImages={this.fetchImages} />
        <GifList images={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer