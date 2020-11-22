import React, { Component } from 'react'
import MemoComp from './MemoComp'
class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Vishwas'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Gangadhar'
            })
        }, 2000)
    }
    render() {
        console.log('-------Parent comp render-------')
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}></MemoComp>
            </div>
        )
    }
}

export default ParentComp
