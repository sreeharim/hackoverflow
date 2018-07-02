import React from "react";

const Card = () => {
  return (
    <div class="container">
      <div class="card flex-row flex-wrap">
        <div class="card-header border-0" style={styles}>
          <img src="//placehold.it/50" alt="" />
        </div>
        <div class="card-block px-2" style={styles}>
          <h4 class="card-title">Title</h4>
          <p class="card-text">Description</p>
        </div>
        <div class="w-100" />
      </div>
    </div>
  );
};

const styles = {
  display: "inline-block"
};
export default Card;
