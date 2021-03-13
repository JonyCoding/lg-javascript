import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <ul className="my-list">
        <li>{true ? "" : "not"}Jony</li>
        <li>Love react</li>
      </ul>
    );
    // var child1 = React.cloneElement('li',null,'Jony')
    // var child2 = React.cloneElement('li',null,'Love React')
    // var root = React.createElement('ul',{className:'my-list'},child1,child2)
  }
}

export default App;
