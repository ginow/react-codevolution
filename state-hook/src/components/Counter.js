import React, { useState, useMemo } from 'react'


function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)
    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }
    const isEven = useMemo(() => {
        // Simulating some delay due to long running process
        let i = 0
        while (i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne]
    )
    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                {/* on clicking counter two, isEven function also gets called, this is where useMemo is needed*/}
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter
