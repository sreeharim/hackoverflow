import React from "react";

const Header = () => {
  const { headerStyle, logoStyle } = styles;
  return (
    <div style={headerStyle}>
      <span style={logoStyle}>
        <img src="../images/logo_small.png" />
      </span>
    </div>
  );
};
const styles = {
  headerStyle: {
    top: 0,
    zIndex: 1,
    height: 60,
    position: "fixed",
    width: "100%",
    background: "white",
    boxShadow: "0px 3px 7px grey"
  },
  logoStyle: {
    marginLeft: 50
  }
};

export default Header;
