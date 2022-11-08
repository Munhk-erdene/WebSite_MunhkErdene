import "../App.css";
import React from "react";
const Star = () => {
  return (
    <img
      id="star"
      className="starStyle"
      src={require("../images/star.png")}
      alt="star"
    />
  );
};

export default Star;
