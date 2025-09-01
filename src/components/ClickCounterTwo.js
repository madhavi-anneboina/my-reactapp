import React, { Component } from 'react'

 class ClickCounterTwo extends Component {
  render() {
    const {count,incrementCount} = this.props
    return (
      <div>
          <h1>{count}</h1>
          <button onClick={incrementCount}>Clcik {count} time</button>
      </div>
    )
  }
}

export default ClickCounterTwo
