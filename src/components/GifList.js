import React, {Component} from 'react'

export default class GifList extends Component {
    render() {
        return (
            <ul>
                {this.props.gifs.map(url => <li><img alt="" src={url} /></li>)}
            </ul>
        )
    }
}