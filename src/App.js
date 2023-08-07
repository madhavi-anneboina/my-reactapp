import React, { Component } from 'react'


class App extends Component {
  product = "Real me pro "
  price =  20000
  render() {
    return (
      <div>
        <h1>product:{this.product}</h1>
        <p>Price: {this.price}</p>
      </div>
    )
  }
}

export default App;
