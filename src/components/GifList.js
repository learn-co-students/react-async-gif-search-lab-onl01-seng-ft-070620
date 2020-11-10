import React, { Component } from 'react'


export default class Giflist extends Component
{
    constructor(props)
    {
        super()
        this.state = {}
    }

    render()
    {
        return (
            <div>
                <img src={this.props.gifs[0]} alt=''/>
                <img src={this.props.gifs[1]} alt=''/>
                <img src={this.props.gifs[2]} alt=''/>
            </div>
        )
    }
}