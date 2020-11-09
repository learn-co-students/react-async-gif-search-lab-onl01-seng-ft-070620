import React, {Component} from 'react'

export default class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            query: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getGifs(this.state.query)
        this.setState({query : ''})
    }

    clearGifs() {
        this.setState({gifs: []})
    }

    render() {
        return (
            <form className="GifSearch" onSubmit={this.handleSubmit.bind(this)}>
                <label><str>Enter a Search Term: {"\n"}</str></label>
                <input 
                    onChange={this.handleChange} 
                    name="query" 
                    type="text" 
                    value={this.state.query}
                />
                <input 
                    type="submit" 
                    value="Submit"/>
            </form>
        )
    }
}