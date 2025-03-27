import React from "react";

class PureComp extends React.PureComponent{
    render(){
        console.log("Pure Component Render ******")
        return(
            <div>
                <h1>This is an example of pure component {this.props.name}</h1>
            </div>
        )
    }
}

export default PureComp