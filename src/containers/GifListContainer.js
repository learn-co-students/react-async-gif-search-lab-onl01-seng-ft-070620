import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    render() {
        return(
            <div>
                < GifSearch fetchGifs={this.fetchGifs}/>
                < GifList gifs={this.state.gifs} />
            </div>
        )
    }

    componentDidMount() {
        this.fetchGifs()
    }

    fetchGifs = (searchKeyword = "dog") => {
        let url= `https://api.giphy.com/v1/gifs/search?q=${searchKeyword}&api_key=dc6zaTOxFJmzC&rating=g`
        fetch(url)
        .then(r=>r.json())
        .then(gifs=> {
            let gifData = gifs.data
            gifData.length = 3
            this.setState({gifs: gifData})
        })
    }

}
export default GifListContainer