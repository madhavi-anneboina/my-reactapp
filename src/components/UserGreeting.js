import React from "react";


class UserGreeting extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedin : true
        }
    }
    render(){
        return(
            <div>
              {this.state.isLoggedin ? <h1>Welcome to the component</h1> : <h2>Welcome to guest user</h2>}
            </div>
        )
    }
}

export default UserGreeting