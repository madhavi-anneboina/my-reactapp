import React, { Component } from 'react';
import withCounter from './withCounter'


class Message extends Component {
   constructor(props){
    super(props)
    this.state = {
        message : "Welcome visitor"
    }
   }

  changeMessage = () =>{
    this.setState({message:"Thak you for subscribing"})

  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>

        <h4>{this.props.name}</h4>
        <button onClick={this.changeMessage}>Subscribe</button>
      </div>
    )
  }
}

export default withCounter(Message)