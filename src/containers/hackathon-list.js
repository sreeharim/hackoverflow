import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../components/card";

class HackathonList extends Component {
  renderList() {
    return this.props.hackathons.map(hackathon => {
      //    return <li key={hackathon.id}>{hackathon.name}</li>;
      return <Card key={hackathon.id} hackathon={hackathon} />;
    });
  }
  render() {
    const { hackathonlistStyle } = styles;
    return (
      <div className="container">
        <div className="row" style={hackathonlistStyle}>
          <div className="col">
            <div className="card-deck">{this.renderList()}</div>
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  hackathonlistStyle: {
    marginTop: 20,
    marginRight: 50,
    marginLeft: 50
  }
};
function mapStateToProps(state) {
  return {
    hackathons: state.hackathons
  };
}

export default connect(mapStateToProps)(HackathonList);
