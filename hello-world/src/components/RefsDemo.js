import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
            </div>
        )
    }
}

export default RefsDemo
