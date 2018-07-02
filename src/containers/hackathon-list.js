import React, { Component } from "react";
import { connect } from "react-redux";

class HackathonList extends Component {
  renderList() {
    return this.props.hackathons.map(hackathon => {
      return <li key={hackathon.id}>{hackathon.name}</li>;
    });
  }
  render() {
    return (
      <div>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hackathons: state.hackathons
  };
}

export default connect(mapStateToProps)(HackathonList);
