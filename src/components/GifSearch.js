import React from 'react'

class GifSearch extends React.Component {

    state = {
        searchKeyword: ""
    }

    formSubmit = event => {
        event.preventDefault()
        this.props.fetchGifs(this.state.searchKeyword)
    }
     
    render() {
        return (
        <form onSubmit={this.formSubmit}>
            <div>
                <label>
                    Search
                    <input type="text" onChange={event => this.setState({searchKeyword: event.target.value})} />
                </label>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        )
    }
}
export default GifSearch