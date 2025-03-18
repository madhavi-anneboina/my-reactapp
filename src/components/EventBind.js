import React from "react";


class EventBind extends React.Component{
    constructor(){
        super()
        this.state ={
            message : "hello"
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler (){
        this.setState({message :"world"})
    }
    render(){
        return(
            <div>
                <h1>Helloo</h1>
               {/* <button onClick={this.clickHandler.bind(this)}> clicked</button> */}
                       {/* <button onClick={() => this.clickHandler()}> clicked</button>  */}
                       <button onClick={this.clickHandler}> clicked</button> 
               
            </div>
        )
    }
}

export default EventBind