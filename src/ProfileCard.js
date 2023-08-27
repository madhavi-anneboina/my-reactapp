import React from 'react';


const ProfileCard = ({ title, handle, image }) => {
    return (
    //     <div class="row">
    //     {/* <img src={image} /> */}
    //     <div class="col-sm-6">
    //         <div class="card" style={{ width: "100%" }}>
    //             <div class="row no-gutters">
    //                 <div class="col-md-4">
    //                     <img class="card-img" src={image} />
    //                 </div>
    //                 <div class="col-md-8">
    //                     <div class="card-body">
    //                         <h5 class="card-title">Title Is {title}</h5>
    //                         <p class="card-text">Handle is {handle}</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    
    <div class="row">
    <div class="col-sm-6">
        <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src={image} />
            <div class="card-body">
                <h5 class="card-title">Title Is {title}</h5>
                <p class="card-text">Handle is {handle}</p>
            </div>
        </div>
    </div>
</div>
    
    
    
    
    
    )
}

export default ProfileCard