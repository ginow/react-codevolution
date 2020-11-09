import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler() {
        console.log('Clicked the button')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me Class event</button>
            </div>
        )
    }
}

export default ClassClick
