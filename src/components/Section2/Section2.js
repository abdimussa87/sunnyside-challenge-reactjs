import React from "react";
import "./Section2.css";
function Section2({ imgSrc, title, content }) {
  return (
    <div className="section2">
      <img src={imgSrc} alt="pic" />
      <div className="section2__content">
        <h5>{title}</h5>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Section2;
