import { useState } from 'react'
// If initial count is specified that value is used else 0 will be used
function useCounter(initialCount = 0, value) {

    const [count, setCount] = useState(initialCount)
    const increment = () => {
        setCount(prevCount => prevCount + value)
    }
    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }
    const reset = () => {
        setCount(0)
    }

    return [count, increment, decrement, reset]
}

export default useCounter
