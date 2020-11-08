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
        // If dependent on props then pass it as argument as well
        this.setState((prevState, props) => ({
            count: prevState.count + props.somevariable
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
