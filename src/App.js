// import './styles.css'
import React, { useState } from 'react';
import Filed from './components/Filed';
import Languages from './components/Languages';
import Translate from './components/Translate';


const App = () => {
  const[language,setLanguage] = useState('es')
  const[text,setText] = useState('')
  // const date = new Date()
  // const time = date.toLocaleTimeString()
  const inputType="number"
  const minValue = 5
  return (
    <div>
       <input type={inputType} min={minValue} />
    </div>
  )
}

export default App
