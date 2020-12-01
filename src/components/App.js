import React, { Component, useState } from "react";
import "../styles/App.css";
const relatives = ["santhosh", "shamanth", "shreesha"];
class App extends Component {
  render() {
    return (
      <div id="main">
        <ol key="relativeList">
          {relatives.map((relative, index) => (
            <li key={`relativeListItem${index + 1}`}>{relative}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
