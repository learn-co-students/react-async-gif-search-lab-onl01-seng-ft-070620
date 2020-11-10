import React, { Component } from 'react'

export default class MyComponent extends Component
{
    constructor(props)
    {
        super()
        this.state = {value: ''}
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    render()
    {
        return (
            <form onSubmit={(event) => {
                event.preventDefault()
                console.log('trying to submit')
                console.log(this.state.value)
                this.props.onSubmit(this.state.value)
            }}>
                <input type='text' onChange={this.handleChange}/>
            </form>
        )
    }
}