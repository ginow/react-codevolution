import React, { useEffect, useRef } from 'react'

function FocusInput() {
    const inputRef = useRef(null)
    useEffect(() => {
        // focus the input element
        inputRef.current.focus()
    }, []) // Keep it empty to emulate componentDidMount
    return (
        <div>
            <input ref={inputRef} type='text' ></input>
        </div >
    )
}

export default FocusInput
