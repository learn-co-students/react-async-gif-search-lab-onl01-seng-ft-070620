import React from 'react'
import GifCard from './GifCard.js'

class GifList extends React.Component {

    render () {
        let gifCard = this.props.gifs.map( gif => < GifCard gif={gif} /> )
        return <div>{gifCard}</div>
    }
}
export default GifList