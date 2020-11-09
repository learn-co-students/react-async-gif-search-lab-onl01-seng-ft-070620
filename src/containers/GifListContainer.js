import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {gifs: []}
    }

    API_KEY = "lOq1e4fOLWRc3SSVpIkPf8dYQA3Vemfz"

    getGifs = (query) => {
        const search_endpoint = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${this.API_KEY}&rating=g&limit=3`

        fetch(search_endpoint)
          .then(r => r.json())
          .then(({ data }) => {
            let urls = []
            for (const gif of data) {
                urls.push(gif.images.original.url)
            }
            this.addGifs(urls)
          })
        
    }

    addGifs = (urls) => {
        this.setState({gifs: urls})
    }

    render() {
        return (
            <div className="GifListContainer">
                <GifSearch getGifs={this.getGifs.bind(this)} />
                <GifList clearGifs={this.clearGifs} gifs={this.state.gifs}/>
            </div>
        )
    }
}

export default GifListContainer