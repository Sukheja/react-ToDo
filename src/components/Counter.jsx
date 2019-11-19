import React, { Component } from "react";

class Counter extends Component {
  getCounterClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCounter() {
    let { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  /* handleIncrement = () => {
    let count = this.state.count + 1;
    this.setState({ count });
  };

  handleDecrement = () => {
    if (this.state.count === 0) {
      return this.setState({ count: 0 });
    }

    return this.setState({ count: this.state.count - 1 });
  }; */

  render() {
    return (
      <div>
        <span className={this.getCounterClasses()}>{this.formatCounter()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
