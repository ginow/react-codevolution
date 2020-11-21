import React from 'react'
import Person from './Person'

function NameList() {
    const names= ['Bruce','Clark','Diana', 'Bruce']
    const nameList = names.map(name=><h2 key={name}>{name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}


export default NameList
