import React from "react";
import withCounter from "./withCounter";

class ClickCounter extends React.Component{
    
    render(){
        const {count,incrementCount,name} = this.props
        return(
            <div>
                <p>Hello</p>
                  {count}
                <button onClick={incrementCount}>Clciked {count} times : {this.props.name}</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter,100)
