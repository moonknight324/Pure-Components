import React, { PureComponent } from "react";

class PureCounterComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      toggle: false,
    };
  }
  setToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    console.log("This is Pure Component");
    return (
      <div>
        <div>
          <h1>Pure Component</h1>
        </div>
        <div>{this.state.counter}</div>
        <button onClick={this.setToggle}>Set Toggle</button>
        <button onClick={this.state.toggle ? this.increaseCounter : null}>
          Counter
        </button>
      </div>
    );
  }
}

export default PureCounterComponent;
