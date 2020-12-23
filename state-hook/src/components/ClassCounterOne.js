import React, { Component } from 'react'

class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: ''
        }
    }
    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count != this.state.count) {
            // This method is called not only for button click but also when user presses keys and types to input element
            // For every key stroke this method is called which is unnecessary
            console.log("updating document title")
            // If you don't write this function then the title doesn't change when state of ClassCounterOne component changes
            document.title = `Clicked ${this.state.count} times`
        }
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name}
                    onChange={e => {
                        this.setState({ name: e.target.value })
                    }} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click {this.state.count} times
                </button>
            </div >
        )
    }
}

export default ClassCounterOne
