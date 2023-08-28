// import './styles.css'
import 'bulma/css/bulma.css'
import React, { useState } from 'react';
import AnimalShow from './AnimalShow';



const App = () => {
  const [count,setCount] = useState(0)
const handleClick = () =>{
 setCount(count + 1)
}
  return (
     <div>
         <button onClick={handleClick}>Add Element</button>
         <div>
          Number of animals : {count}
         </div>
     </div>

  )
}

export default App
