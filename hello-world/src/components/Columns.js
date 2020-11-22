import React from 'react'

function Columns() {
    const items = [{ title: 'firstlistitem' }, { title: 'secondlistitem' }]
    return (
        <>
            {
                items.map(item => (
                    < React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Vishwas</td>
        </>
    )
}

export default Columns
