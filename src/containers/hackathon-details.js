import React, { Component } from "react";
import { connect } from "react-redux";
import NavItem from "../components/nav-item";
import TabPane from "../components/tab-pane";
import LeaderBoard from "../components/leader-board";
import Contact from "../components/contact";

class HackathonDetails extends Component {
  renderRules(rules) {
    return rules.map((rule, index) => {
      return <p key={index}>{rule.p}</p>;
    });
  }
  renderContact(contact) {
    return contact.map((ct, index) => {
      return <Contact key={index} data={ct} />;
    });
  }
  render() {
    const { hackathondetailstyle, ruleStyle } = styles;
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
          <TabPane tag="details" active={true} style={ruleStyle}>
            {this.renderRules(rules)}
          </TabPane>
          <TabPane tag="leaderboard">
            <LeaderBoard data={leaderBoard} />
          </TabPane>
          <TabPane tag="contact" style={ruleStyle}>
            {this.renderContact(contact)}
          </TabPane>
        </div>
      </div>
    );
  }
}
const styles = {
  hackathondetailstyle: {
    margin: 50
  },
  ruleStyle: {
    fontFamily: "initial",
    background: "white",
    padding: 20,
    boxShadow: "5px 5px 10px grey"
  }
};

function mapStateToProps(state) {
  // console.log(`state ${JSON.stringify(state)}`);
  return {
    hackathon: state.hackathonDetail
  };
}

export default connect(mapStateToProps)(HackathonDetails);
