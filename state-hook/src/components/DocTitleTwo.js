
import React, { useState, useEffect } from 'react'

function DocTitleTwo() {
    // Code is getting repeated as same from DocTitleOne
    // This is where custom hook is needed
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}

export default DocTitleTwo
