import React, { useState } from 'react';
import Field from './components/Filed';
import Languages from './components/Languages';
import Translate from './components/Translate';


const App = () => {
  const[language,setLanguage] = useState('es')
  const[text,setText] = useState('')
  return (
    <div>
      <h4>Hi there</h4>
    </div>
  )
}

export default App
