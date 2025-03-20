import React from "react";


const PersonData = ({person}) =>{
    return (
        <div>
           <h1>My name is : {person.name}</h1>
           <h1>My age is : {person.age}</h1>
           <h1>My city is : {person.city}</h1>
        </div>
    )
}

export default PersonData