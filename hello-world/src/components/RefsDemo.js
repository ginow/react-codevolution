import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }
    componentDidMount() {
        // Directly access the DOM without using .current 
        if (this.cbRef) {
            this.cbRef.focus()
        }
    }
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} placeholder='Input Ref'></input>
                <input type="text" ref={this.setCbRef} placeholder='Call Back ref'></input>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
