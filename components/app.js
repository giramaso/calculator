import React from "react";
import math from "mathjs";

import Button from "./button";
import Input from "./input";
import ClearBtn from "./clear";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      ops: [
        ["7", "8", "9", "/"],
        ["4", "5", "6", "*"],
        ["1", "2", "3", "+"],
        ["^", "0", ".", "-"]
      ]
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: math.eval(this.state.input) });
  };

  renderButton = () => {
    return this.state.ops.map(row => {
      return (
        <div className="row">
          {row.map(digit => {
            return <Button handleClick={this.addToInput}>{digit}</Button>;
          })}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="app">
        <Input input={this.state.input} />
        {this.renderButton()}
        <div className="row">
          <ClearBtn handleClear={() => this.setState({ input: "" })}>
            Clear
          </ClearBtn>
          <Button handleClick={() => this.handleEqual()}>=</Button>
        </div>
      </div>
    );
  }
}

export default App;
