import React, { Component } from 'react'

class SimpleCounterComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
         counter: 0,
         toggle: false,
      }
    }

    setToggle = () => {
        this.setState({toggle: !this.state.toggle})
    }

    increaseCounter = () => {
        this.setState({counter: this.state.counter + 1})
    }
    
  render() {
    console.log("This is Simple Component")
    return (
      <div>
        <div><h1>Simple Component</h1></div>
        <div>{this.state.counter}</div>
        <button onClick={this.setToggle}>Set Toggle</button>
        <button onClick={this.state.toggle ? this.increaseCounter : null}>Counter</button>
      </div>
    )
  }
}

export default SimpleCounterComponent
