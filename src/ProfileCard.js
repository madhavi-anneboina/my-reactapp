import React from 'react';


const ProfileCard = ({title,handle}) => {
  return (
    <div>
        <div>Title Is {title}</div>
        <div> Handle is {handle}</div>
    </div>
  )
}

export default ProfileCard