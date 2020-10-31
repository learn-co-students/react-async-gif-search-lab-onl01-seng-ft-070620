import React from 'react';

class GifSearch extends React.Component {
  state = {
    term: ''
  }

  handleSearch = (event) => {
    this.setState({ term: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getImages(this.state.term)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <label>Enter a search term:</label>
          <input type="text" value={this.state.term} onChange={this.handleSearch} />
        </form>
      </div>
    )
  }
}

export default GifSearch