// import React from 'react'

// const User = ({name}) => {
//   return (
//     <div>
//       <p>user name is : {name}</p>
//     </div>
//   )
// }

// export default User
import React, { Component } from 'react'

 class User extends Component {
  render() {
    return (
      <div>
           <p>user deatils are</p>
           <p>{this.props.id}</p>
           <p>{this.props.name}</p>
           <p>{this.props.age}</p>
           <p>{this.props.place}</p>
           
      </div>
    )
  }
}
export default User;

