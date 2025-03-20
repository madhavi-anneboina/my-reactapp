import React from 'react'
import Persons from '../data/persons.json'
import PersonData from './PersonData'


const NameList = () =>{
    return(
        <div>
        {Persons.map(person=>{
            return(
                <div key={person.id}>
                    <PersonData person ={person}/>
                </div>
            )
        })}
        </div>
    )
}

export default NameList