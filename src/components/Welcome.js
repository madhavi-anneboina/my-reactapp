import React from "react";

class Welcome extends React.Component {
  constructor (props){
     super(props)
     this.state = {
        message: "cggh"
     }
  }

  handleSubscribe = () =>{
   this.setState({message : "helloo i am visiotor"})
  }
    render(){
        return(
            <div>
                <h1> {this.state.message} </h1>
                <button onClick={this.handleSubscribe}>Subscribe</button>
            </div>
        )
        
    }
}



export default Welcome







