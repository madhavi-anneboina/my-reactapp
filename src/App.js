// import './styles.css'
import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import alexa from './images/alexa.png';
import cortana from './images/cortana.png';
import siri from './images/siri.png'


const App = () => {

  return (
    <div>
      <h5>Profile App Assistances</h5>
      <ProfileCard title="Alexa" handle="@alexa99" image={alexa}/>
      <ProfileCard title="Cortana" handle="@cortana32" image={cortana}/>
      <ProfileCard title="Siri" handle="@siri01" image={siri} />
    </div>
  )
}

export default App
