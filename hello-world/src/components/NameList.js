import React from 'react'
import Person from './Person'

function NameList() {
    const persons=[
        {
            id:1,
            name:'Bruce',
            age: 30,
            skill:'React'
        },
{
            id:2,
            name:'Wayne',
            age: 40,
            skill:'Java'
       },  {
            id:3,
            name:'Thomas',
            age: 33,
            skill:'C#'
       }, {
            id:4,
            name:'Batman',
            age: 90,
            skill:'Python'
       } 
    ]
 const personList =persons.map(person => <Person person={person}></Person>)
    return (
        <div>
            {personList}
        </div>
    )
}


export default NameList
