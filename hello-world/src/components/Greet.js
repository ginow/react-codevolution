import React from 'react'
const Greet = props => {
    const { name, heroName } = props
    return (
        <div><h1>Hello  {name}</h1>{heroName}</div>
    )
}
export default Greet;