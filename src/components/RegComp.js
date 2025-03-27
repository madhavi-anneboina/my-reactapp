import React from "react";

class RegComp extends React.Component{
    render(){
        console.log("Reg Component render ***********")
        return(
            <div>
                <h1>Regular Component {this.props.name}</h1>
            </div>
        )
    }
}


export default RegComp;