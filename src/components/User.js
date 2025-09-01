import React from "react";

class User extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {render} = this.props
        return(
            <div>
              <h1>{render()}</h1>
            </div>
        )
    }
}

export default User