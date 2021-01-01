import React from 'react'
import useCounter from './hooks/useCounter'

function CounterTwoForHook() {
    const [count, increment, decrement, reset] = useCounter()

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
