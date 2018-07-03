import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Card from "../components/card";
import PropTypes from "prop-types";

class HackathonList extends Component {
  renderList() {
    return this.props.hackathons.map((hackathon, index) => {
      if (this.props.active == hackathon.active)
        return <Card key={hackathon.id} hackathon={hackathon} />;
    });
  }

  render() {
    const { hackathonlistStyle } = styles;
    return (
      <div className="row" style={hackathonlistStyle}>
        {this.renderList()}
      </div>
    );
  }
}
const styles = {
  hackathonlistStyle: {
    marginRight: 50,
    marginLeft: 50,
    marginBottom: 50
  }
};
function mapStateToProps(state) {
  return {
    hackathons: state.hackathons
  };
}

export default connect(mapStateToProps)(HackathonList);
