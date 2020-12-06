import React from 'react'
import { UserConsumer } from './userContext'

function ComponentF() {
    return (
        <UserConsumer>
            {
                (username) => {
                    return <div> Hello {username}</div>
                }
            }
        </UserConsumer>
    )
}

export default ComponentF
