// import './styles.css'
import 'bulma/css/bulma.css'
import React, { useState } from 'react';
import AnimalShow from './AnimalShow';

let getRandomAnimal =() =>{
  const animals = ["bird","cat","cow","dog","horse","hary"]
  return animals[Math.floor(Math.random()*animals.length)]
}


const App = () => {
  const [animals,setAnimals] = useState([])
const handleClick = () =>{
 setAnimals([...animals,getRandomAnimal()])
}
  return (
     <div>
         <button onClick={handleClick}>Add Element</button>

         <div>{animals}</div>
      
     </div>

  )
}

export default App
