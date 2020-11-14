import React, { Component } from 'react'

class GifSearch extends Component {
  state = {
    search: ""
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.fetchGifs(this.state.search)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.search} onChange={e => this.setState({search: e.target.value})}/>
        </form>
      </div>
    )
  }
}

export default GifSearch