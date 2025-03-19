import React from 'react'
import Persons from '../data/persons.json'

const NameList = () =>{
    return(
        <div>
        {Persons.map(person=>{
            return(
                <div key={person.id}>
                     <h1>Name : {person.name}</h1>
                     <h1>Age : {person.age}</h1>
                     <h1>City : {person.city}</h1>
                </div>
            )
        })}
        </div>
    )
}

export default NameList