
import React, { Component } from 'react'
class Message extends Component {
    constructor() {
        // Call the base class ('react' class) constructor
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }
    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    render() {
        return (
            <div>
                <h1> {this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Message;