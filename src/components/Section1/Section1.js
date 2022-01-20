import React from "react";
import "./Section1.css";

function Section1({imgSrc,title,content,buttonColor,reverse}) {
  return (
    <div className={reverse?"section1 reverse":"section1"}>
      <div className="section1__left">
        <h5>{title}</h5>
        <p>
         {content}
        </p>
        <button style={{backgroundColor:buttonColor}}>LEARN MORE</button>
      </div>
      <div className="section1__right">
          <img src={imgSrc} alt="pic" />
      </div>
    </div>
  );
}

export default Section1;
