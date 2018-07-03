import React from "react";

const Card = props => {
  const { name, summary, id, startDate, endDate } = props.hackathon;
  const {
    cardStyle,
    cardTitleStyle,
    cardTextStyle,
    buttonStyle,
    dateTextStyle
  } = styles;
  const imgSrc = `/images/${id}.png`;
  return (
    <div style={cardStyle} className="card">
      <img className="card-img-top" src={imgSrc} alt="Card image cap" />
      <div className="card-body">
        <h5 style={cardTitleStyle} className="card-title">
          {name}
        </h5>
        <p style={cardTextStyle} className="card-text">
          {summary}
        </p>
        <p style={dateTextStyle} className="card-text">
          STARTS ON : {startDate}
        </p>
        <p style={dateTextStyle} className="card-text">
          ENDS ON : {endDate}
        </p>
        <button style={buttonStyle} className="btn btn-primary">
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
};

const styles = {
  cardStyle: {
    textAlign: "center",
    boxShadow: "5px 10px 5px grey",
    width: 280
  },
  cardTitleStyle: {
    marginTop: 20,
    textAlign: "center",
    color: "#46535e",
    fontFamily: "sans-serif"
  },
  cardTextStyle: {
    color: "rgb(111, 117, 121)",
    textAlign: "center",
    fontFamily: "cursive"
  },
  dateTextStyle: {
    color: "rgb(111, 117, 121)",
    textAlign: "center",
    fontFamily: "monospace",
    fontSize: 12
  },
  buttonStyle: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    margin: 20,
    backgroundColor: "#9c0",
    borderColor: "#9c0",
    fontSize: 14
  }
};
export default Card;
