import React, { useState, useEffect, useRef } from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])
    return (
        <div>
            Hook timer - {timer}
            {/*interval is not defined error, because it is inside useEffect
              this is where useRef helps
            */}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear hook timer</button>
        </div>
    )
}

export default HookTimer
