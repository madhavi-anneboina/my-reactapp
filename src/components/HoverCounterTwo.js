import React, { Component } from 'react'

 class HoverCounterTwo extends Component {
  render() {
    const {count,incrementCount} = this.props
    return (
      <div>
        <h1>{count}</h1>
          <button onMouseOver={incrementCount}>Clcik {count} time</button>
      </div>
    )
  }
}

export default HoverCounterTwo
