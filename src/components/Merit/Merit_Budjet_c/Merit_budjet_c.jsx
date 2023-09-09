import React from "react";
import "./Merit_budjet_c.css";


const Merit_budjet_c = () => {
  return (
    <>
      <div className="merit">
        <div className="flex">
          <h2>
            What is your preferred matrix type for &#123; Group 1 &#125; ?
          </h2>
          <span className="radio-button-group flex items-center ms-10 ">
            <input type="radio" name="" id="" />
            <h3>3X3</h3>
          </span>
          <span className="flex items-center ms-10">
            <input type="radio" name="" id="" />
            <h3>3X5</h3>
          </span>
          <span className="flex items-center ms-10">
            <input type="radio" name="" id="" />
            <h3>Custom</h3>
          </span>
        </div>
        <div className="budjet-c">

        </div>
      </div>
     
    </>
  );
};

export default Merit_budjet_c;
