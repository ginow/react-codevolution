import React, { useState, useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        // This method will be called at every render
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        // Below statement is executed during unmounts, used for cleanup
        return () => {
            console.log('Component unmounted')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, []) // Empty array to specify no prop and no state, this prevents unnecessary callings

    return (
        <div>
            Hooks X- {x} Y- {y}
        </div>
    )
}

export default HookMouse
