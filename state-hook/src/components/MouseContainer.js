import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            {/*below toggle button will unmount the HookMouse component but the event listener will be still there, 
            so need to clean up event listeners and subscriptions*/
            }
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <HookMouse></HookMouse>}
        </div>
    )
}

export default MouseContainer
