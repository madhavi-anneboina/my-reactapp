import React from 'react'

const Translate = ({text,language}) => {
    const Translated = useTranslation(text,language)
  return (
    <div className='translate'>
        <label className='label'>Output</label>
        <h1 className='title'>{Translated}</h1>

    </div>
  )
}

export default Translate