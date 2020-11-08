import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment() {
        // do not change value of state directly it will not update UI, use setState
        // so do not do like: this.state.count=this.state.count +1
        this.setState({
            count: this.state.count + 1
        }, () => {
            // setState is async so use callback
            console.log(this.state.count)
        })
    }
    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter
