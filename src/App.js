import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HackathonList from "./containers/hackathon-list";
import SubHeading from "./components/sub-heading";
import Header from "./components/header";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main-content">
          <SubHeading text="UPCOMING EVENTS" />
          <HackathonList active={true} />
          <SubHeading text="COMPLETED EVENTS" />
          <HackathonList active={false} />
        </div>
      </div>
    );
  }
}

export default App;
