import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HackathonList from "./containers/hackathon-list";

class App extends Component {
  render() {
    return (
      <div>
        <HackathonList />
      </div>
    );
  }
}

export default App;
