// import './styles.css'
import 'bulma/css/bulma.css'
import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import alexa from './images/alexa.png';
import cortana from './images/cortana.png';
import siri from './images/siri.png'


const App = () => {

  return (
   
  <div className="container">
    <div className='section'>
    <div className="columns">
      <div className="column is-3">
        <ProfileCard title="Alexa" handle="@alexa99" image={alexa} />
      </div>
      <div className="column is-3">
        <ProfileCard title="Cortana" handle="@cortana32" image={cortana} />
      </div>
      <div className="column is-3">
        <ProfileCard title="Siri" handle="@siri01" image={siri} />
      </div>
    </div>
    </div>
  </div>

  )
}

export default App
