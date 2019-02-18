import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      showError: false
    };
  }

  onDecrementHandler() {
    if (this.state.counter !== 0) {
      this.setState({ counter: this.state.counter - 1 });
    } else {
      this.setState({ showError: true });
    }
  }

  onIncrementHandler() {
    if (this.state.showError === true) {
      this.setState({ counter: this.state.counter + 1, showError: false });
    } else {
      this.setState({ counter: this.state.counter + 1 });
    }
  }
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}{" "}
        </h1>
        {this.state.showError === true ? (
          <h2 data-test="error-display">The value cannot be bellow zero</h2>
        ) : null}
        <button
          data-test="decrement-button"
          onClick={() => this.onDecrementHandler()}
        >
          Decrement Counter
        </button>
        <button
          data-test="increment-button"
          onClick={() => this.onIncrementHandler()}
        >
          Increment Counter
        </button>
      </div>
    );
  }
}

export default App;
