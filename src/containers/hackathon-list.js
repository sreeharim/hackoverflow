import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../components/card";

class HackathonList extends Component {
  renderList() {
    return this.props.hackathons.map(hackathon => {
      //    return <li key={hackathon.id}>{hackathon.name}</li>;
      return <Card key={hackathon.id} />;
    });
  }
  render() {
    const { hackathonlistStyle } = styles;
    return (
      <div style={hackathonlistStyle}>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}
const styles = {
  hackathonlistStyle: {
    marginTop: 20
  }
};
function mapStateToProps(state) {
  return {
    hackathons: state.hackathons
  };
}

export default connect(mapStateToProps)(HackathonList);
