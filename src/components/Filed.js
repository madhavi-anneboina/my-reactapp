import React from 'react'

const Filed = ({value,onChange}) => {

  return (
    <div className='filed'>
        <h1>Translate App</h1>
        <label>Enter English </label>
        <input 
        className='input'
        value = {value}
        onChange = {(e) =>onChange(e.target.value)}
         />
      
    </div>
  )
}

export default Filed
