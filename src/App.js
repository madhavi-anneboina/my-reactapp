// import './styles.css'
import React, { useState } from 'react';
import Filed from './components/Filed';
import Languages from './components/Languages';
import Translate from './components/Translate';


const App = () => {
  const[language,setLanguage] = useState('es')
  const[text,setText] = useState('')
  return (
    <div>
     <Filed onChange={setText} />
     <Languages  language={language} onLanguageChange={setLanguage}/>
     <hr/>
     <Translate text={text} language={language}/>
    </div>
  )
}

export default App
