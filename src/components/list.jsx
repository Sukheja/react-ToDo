import React, { Component } from "react";

class ListDemo extends Component {
  state = {
    tags: []
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Hello"}
        {this.renderTags()}
      </div>
    );
  }
}

export default ListDemo;
