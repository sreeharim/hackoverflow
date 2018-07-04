import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAllHackathons } from "../actions/index";
import Card from "../components/card";

class HackathonList extends Component {
  renderList() {
    return this.props.hackathons.map((hackathon, index) => {
      if (this.props.active == hackathon.active)
        return <Card key={hackathon.id} hackathon={hackathon} />;
    });
  }
  componentDidMount() {
    console.log("component mounted");
    this.props.fetchAllHackathons();
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
function mapDispatchtoProps(dispatch) {
  return bindActionCreators({ fetchAllHackathons }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(HackathonList);
