import React, { useState } from 'react'


const Counter = () => {
    const [counter,setCounter] = useState(0)

    let updatedCounter = () =>{
        setCounter(counter + 1); 
       
    }
  return (
    <div> 
        <h1> Counter value {counter}  </h1> 
        <button onClick={updatedCounter}>Counter</button> 
        </div>
   
  )
}

export default Counter