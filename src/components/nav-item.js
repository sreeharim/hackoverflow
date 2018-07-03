import React from "react";

const NavItem = ({ tag, children, active }) => {
  const classes = `nav-link ${active ? "active" : ""}`;
  const id = `pills-${tag}-tab`;
  const hrefLink = `#pills-${tag}`;
  const ariaControls = `pills-${tag}`;
  const isSelected = active ? "true" : "false";
  return (
    <li className="nav-item">
      <a
        className={classes}
        id={id}
        data-toggle="pill"
        href={hrefLink}
        role="tab"
        aria-controls={ariaControls}
        aria-selected={isSelected}
      >
        {children}
      </a>
    </li>
  );
};

export default NavItem;
