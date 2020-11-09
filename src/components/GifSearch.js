import React, {Component} from 'react'

export default class GifSearch extends Component {
  constructor() {
    super()
    this.state = {query: ''}
  }

  handleChange = event => {
    this.setState({ query: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.query)
    this.setState({ query:''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Search GIFs: </label>
        <input
          type='text'
          value={this.state.query}
          onChange={this.handleChange}
        />
      </form>
    )
  }

}
