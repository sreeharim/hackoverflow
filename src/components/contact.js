import React from "react";

const Contact = props => {
  const { name, email, phno } = props.data;
  return (
    <div>
      <div>{name}</div>
      <div>{email}</div>
      <div>{phno}</div>
    </div>
  );
};

export default Contact;
