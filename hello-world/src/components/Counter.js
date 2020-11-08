import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment() {
        // React groups setState calls, so use prevState
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    incrementFiveTimes() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={() => this.incrementFiveTimes()}>IncrementFiveTimes</button>
            </div>
        )
    }
}

export default Counter
