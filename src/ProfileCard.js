import React from 'react';


const ProfileCard = ({ title, handle, image }) => {
    return (
        /* added App data here 
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
  
        */



        <div className="card" style={{ width: "18rem" }}>
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4"> Title is : {title}</p>
                    <p className="subtitle is-6">Handle is : {handle}</p>
                </div>
            </div>
        </div>




    )
}

export default ProfileCard