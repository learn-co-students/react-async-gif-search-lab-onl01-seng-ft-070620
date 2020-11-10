import React from 'react'

class GifSearch extends React.Component {
    constructor() {
        super()

        this.state = {
            query: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.query)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input type="text" name="query" value={this.state.query} onChange={event => this.handleChange(event)}></input>
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default GifSearch