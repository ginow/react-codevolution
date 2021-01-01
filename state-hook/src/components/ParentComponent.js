import React, { useState } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)
    // Function is not same after rerender
    const incrementAge = () => {
        setAge(age + 1)
    }
    const incrementSalary = () => {
        setSalary(salary + 1000)
    }
    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            {/* function as prop, which is not same after rerender*/}
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent
