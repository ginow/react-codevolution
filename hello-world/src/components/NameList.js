import React from 'react'

function NameList() {
 const names=['Bruce','Clark','Batman']
    return (
        <div>
            {
                names.map(name => <h2>{name}</h2>)
            }
        </div>
    )
}


export default NameList
