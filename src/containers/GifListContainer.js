import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component
{
    constructor(props)
    {
        super()
        this.state = {gifs: []}
    }

    handleSubmit = (value) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${value}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(r => r.json())
        .then(r => {
            console.log('submitted')
            for(let i = 0; i < 3; i++)
            {
                this.setState((prevState) => {return {gifs: prevState.gifs.concat([r.data[i].images.original.url])}})
            }
            console.log(this.state.gifs)
        })
    }

    render()
    {
        return (
            <div>
                <GifSearch onSubmit={this.handleSubmit}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}