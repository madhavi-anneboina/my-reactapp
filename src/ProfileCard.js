import React from 'react'

const ProfileCard = ({title,handle}) => {
  return (
    <div>
        <div>{title}</div>
        <div>{handle}</div>
    </div>
  )
}

export default ProfileCard