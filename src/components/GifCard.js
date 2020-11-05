import React from 'react'

class GifCard extends React.Component {

    render () {
        let gifUrl = this.props.gif.images.original.url
        return <div><img key={gifUrl} src={gifUrl} alt="gif"/></div>
    }
}
export default GifCard