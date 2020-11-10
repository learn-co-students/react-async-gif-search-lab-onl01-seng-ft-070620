import React from 'react'

class GifList extends React.Component {
    render() {
        return (
            <ul>
                {/* {this.props.gifs.map(g => <li><img src={g} alt="loading" /></li>)} */}
                <li><img src={this.props.gifs[0]} alt="loading" /></li>
                <li><img src={this.props.gifs[1]} alt="loading" /></li>
                <li><img src={this.props.gifs[2]} alt="loading" /></li>
            </ul>
        )
    }
}

export default GifList