import React, { useState, useEffect } from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div>
            Hook timer - {timer}
            {/*interval is not defined error, because it is inside useEffect
              this is where useRef helps
            */}
            <button onClick={() => clearInterval(interval)}>Clear hook timer</button>
        </div>
    )
}

export default HookTimer
