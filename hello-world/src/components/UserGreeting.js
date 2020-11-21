import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn:false 
        }
    }
    
    render() {
       return this.state.isLoggedIn && <div>Welcome Vishwas</div>  
    }
}

export default UserGreeting
