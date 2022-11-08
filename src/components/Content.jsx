import "../App.css";
import React from "react";

const Content = ({ title, text }) => {
  return (
    <div className="Instant">
      <h1>{title}</h1>
      <span>{text}</span>
      <div className="searchContainer">
        <input type="text" id="srchInpt" placeholder="Email" />
        <button className="srchBtn">Get early access</button>
      </div>
    </div>
  );
};

export default Content;
