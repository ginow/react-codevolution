import React, { useState } from 'react'
import useDocumentTitle from './hooks/useDocumentTitle'

function DocTitleTwo() {
    // Code is getting repeated as same from DocTitleOne
    // This is where custom hook is needed
    const [count, setCount] = useState(0)
    useDocumentTitle(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}

export default DocTitleTwo
