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
        <input id="price" type='number'/>
        <button onClick={()=>{
        let p = document.getElementById('price').value
        console.log(p)
        this.state.price = p
        console.log(this.p)
        this.setState({
          price:p
        })
        }}>Update</button>
      </div>
    )
  }
}

export default App;
