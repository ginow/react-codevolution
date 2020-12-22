import React, { Component } from 'react'

class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState) {
        // If you don't write this function then the title doesn't change when state of ClassCounterOne component changes
        document.title = `Clicked ${this.state.count} times`
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click {this.state.count} times
                </button>
            </div>
        )
    }
}

export default ClassCounterOne
