import React, { useState } from 'react'
import useCounter from './hooks/useCounter'

function CounterOneForHook() {
    // start with 10 and increment by 10
    const [count, increment, decrement, reset] = useCounter(10, 10)
    return (
        <div>
            <h2>Count ={count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CounterOneForHook
