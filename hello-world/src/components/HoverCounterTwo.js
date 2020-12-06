import React, { Component } from 'react'

class HoverCounterTwo extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default HoverCounterTwo
