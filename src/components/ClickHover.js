import React from "react";
import withCounter from "./withCounter";

class ClickHover extends React.Component{
    
    render(){
        const {count,incrementCount,name} = this.props
        return(
            <div>
                  {count}
                <button onMouseOver={incrementCount}>Clciked {count} times : {name}</button>
            </div>
        )
    }
}

export default withCounter(ClickHover,12)
