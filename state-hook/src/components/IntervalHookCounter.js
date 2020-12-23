import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        // Declare function here itself to remind that the useEffect is dependent on a prop
        function doSomething() {
            console.log(someProp)
        }
        doSomething()
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [someProp])
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
