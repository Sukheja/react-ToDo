import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counter.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

/* const Counters = props => {
  return (
    <div>
      <button
        onClick={this.props.onReset}
        className="btn btn-primary btn-sm m-2"
      >
        Reset
      </button>
      {this.props.counter.map(counter => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={this.props.onDelete}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
        />
      ))}
    </div>
  );
};

export default Counters; */
