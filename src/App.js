// import './styles.css'
import 'bulma/css/bulma.css'
import React, { useState } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import Message from './components/Message';





const App = () => {

  return (
     <div>
        <h1>Hello world</h1>
        <Greet  name = "ramana">
          <p>How are you doing props</p>
          </Greet>
        <Greet name="tuy"/>

        <Welcome />

        <Counter />
        <Message />
         

      
     </div>

  )
}

export default App
