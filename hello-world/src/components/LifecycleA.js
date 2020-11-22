import React, { Component } from 'react'
import LifecycleB from './LIfecylceB'
class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Vishwas'
        }
        console.log('LifecycleA constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    render() {
        console.log('LifecycleA render')
        return (
            <div>
               LifecycleA 
               <LifecycleB></LifecycleB>
            </div>
        )
    }
}

export default LifecycleA
