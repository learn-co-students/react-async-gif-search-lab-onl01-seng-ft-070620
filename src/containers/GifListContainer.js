import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            query: 'random',
            gifs: []
        }
    }
    
    componentDidMount() {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(response => response.json())
                .then(result => {
                    // console.log(result.data.slice(0, 3).map(g => g.images.original.url))
                    this.setState({
                        gifs: result.data.slice(0, 3).map(g => g.images.original.url)
                    })
                })
    }

    componentDidUpdate(prevState) {
        if (prevState.query !== this.state.query) {

            fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
                .then(response => response.json())
                    .then(result => {
                        // console.log(result.data.slice(0, 3).map(g => g.images.original.url))
                        this.setState({
                            gifs: result.data.slice(0, 3).map(g => g.images.original.url)
                        })
                    })
        }
    }
    
    render() {
        return(
            <div>
                <GifSearch onSubmit={this.handleSubmit} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    handleSubmit = (query) => {
        this.setState({
            query: query
        })
    }
}

export default GifListContainer