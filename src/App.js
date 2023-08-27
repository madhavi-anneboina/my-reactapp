// import './styles.css'
import React, { useState } from 'react';
import ProfileCard from './ProfileCard';


const App = () => {

  return (
    <div>
      <h5>Profile App Assistances</h5>
      <ProfileCard title="Alexa" handle="@alexa99" />
      <ProfileCard title="Cortana" handle="@cortana32" />
      <ProfileCard title="Siri" handle="@siri01"  />
    </div>
  )
}

export default App
