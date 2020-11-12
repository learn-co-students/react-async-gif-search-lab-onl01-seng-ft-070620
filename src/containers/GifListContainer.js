import React, { Component, Fragment } from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  fetchGifs = (search = "puppies") => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          gifs: data.map((gif) => ({ url: gif.images.original.url })),
        });
      });
  };

  render() {
    return (
      <Fragment>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList renderGifs={this.state.gifs} />
      </Fragment>
    );
  }
}

export default GifListContainer;
