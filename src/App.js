import React, { Component } from 'react'


class App extends Component {
  state = {
    product : "Real me pro",
    price : 20000
  }
  
  render() {
    return (
      <div>
        <h1>product:{this.state.product}</h1>
        <p>Price: {this.state.price}</p>
        <input type='number'/>
        <button>Update</button>
      </div>
    )
  }
}

export default App;
