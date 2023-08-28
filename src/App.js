// import './styles.css'
import 'bulma/css/bulma.css'
import React, { useState } from 'react';
import AnimalShow from './AnimalShow';



const App = () => {
const handleClick = () =>{
  console.log("clicked")
}
  return (
     <div>
         <button onClick={handleClick}>Add Element</button>
     </div>

  )
}

export default App
