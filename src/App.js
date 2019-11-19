import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Counters from "./components/Counters";

class App extends Component {
  state = {
    counter: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counter];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counter: counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counter];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counter: counters });
  };

  handleDelete = counterID => {
    const counter = this.state.counter.filter(c => c.id !== counterID);
    this.setState({ counter });
  };

  handleReset = () => {
    const counter = this.state.counter.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counter });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCount={this.state.counter.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            counter={this.state.counter}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
