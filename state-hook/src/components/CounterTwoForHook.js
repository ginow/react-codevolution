import React from 'react'
import useCounter from './hooks/useCounter'

function CounterTwoForHook() {
    // Start from 0 and increment by 1
    const [count, increment, decrement, reset] = useCounter(0, 1)

    return (
        <div>
            <h2>Count ={count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CounterTwoForHook
