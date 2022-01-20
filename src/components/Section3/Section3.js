import React from "react";
import "./Section3.css";

function Section3({ imgSrc, text, name, employeePosition }) {
  return (
    <div className="section3">
      <div className="section3__profileContainer">
        <img src={imgSrc} alt="profile" />
      </div>

      <div className="section3__textContainer">
        <p>{text}</p>
        <h5>{name}</h5>
        <h6>{employeePosition}</h6>
      </div>
    </div>
  );
}

export default Section3;
