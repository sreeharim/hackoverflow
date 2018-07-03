import React, { Component } from "react";
import { connect } from "react-redux";
import NavItem from "../components/nav-item";
import TabPane from "../components/tab-pane";

class HackathonDetails extends Component {
  renderRules(rules) {
    return rules.map((rule, index) => {
      console.log(rule);
      return <p>{rule.p}</p>;
    });
  }
  render() {
    const { hackathondetailstyle } = styles;
    const { rules, contact, leaderBoard } = this.props.hackathon;

    return (
      <div style={hackathondetailstyle}>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <NavItem tag="details" active={true}>
            Rules & Details
          </NavItem>
          <NavItem tag="leaderboard">Leaderboard</NavItem>
          <NavItem tag="contact">Contact</NavItem>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <TabPane tag="details" active={true}>
            {this.renderRules(rules)}
          </TabPane>
          <TabPane tag="leaderboard">This is a Leaderboard</TabPane>
          <TabPane tag="contact">This is a Contact</TabPane>
        </div>
      </div>
    );
  }
}
const styles = {
  hackathondetailstyle: {
    margin: 50
  }
};

function mapStateToProps(state) {
  // console.log(`state ${JSON.stringify(state)}`);
  return {
    hackathon: state.hackathonDetail
  };
}

export default connect(mapStateToProps)(HackathonDetails);
