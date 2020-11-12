import React, { Component, Fragment } from "react";

class GifSearch extends Component {
  state = {
    search: "",
  };

  handleSubmit = (submission) => {
    submission.preventDefault();
    this.props.fetchGifs(this.state.search);
  };
  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.search}
            onChange={(event) => this.setState({ search: event.target.value })}
          />
        </form>
      </Fragment>
    );
  }
}

export default GifSearch;
