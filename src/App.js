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
  return (
    <div>
     {/* <Filed onChange={setText} />
     <Languages  language={language} onLanguageChange={setLanguage}/>
     <hr/>
     <Translate text={text} language={language}/> */}
     {new Date().toLocaleTimeString()}
    </div>
  )
}

export default App
