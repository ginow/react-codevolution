import React from 'react'
const Greet = ({ name, heroName }) => {
    return (
        <div><h1>Hello  {name}</h1>{heroName}</div>
    )
}
export default Greet;