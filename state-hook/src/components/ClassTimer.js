// To show another usage of useRef
// Below is using class component, same needs to be done in functional component
import React, { Component } from 'react'

class ClassTimer extends Component {
    interval
    constructor(props) {
        super(props)

        this.state = {
            timer: 0
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ timer: prevState.timer + 1 }))
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                Class Timer - {this.state.timer}
                <button onClick={() => clearInterval(this.interval)}>Clear Timer</button>
            </div>
        )
    }
}

export default ClassTimer
