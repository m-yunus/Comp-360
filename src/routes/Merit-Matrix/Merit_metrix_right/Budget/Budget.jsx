import React from "react";
import "./Budget.css";

const Budget = () => {
  return (
    <>
      <div>
        <h2 className="font-semibold">
          What is the budget for &#123; Group 1 &#125; ?
        </h2>
        <div className="flex  mt-10  gap-16">
          
            <ul className="Culture-inputbox-list performance-inputs mt-4   ">
              <li>
                <label htmlFor="currency">Budget</label>
                <input type="number" />
              </li>
            </ul>
         

          <div className="flex gap-10 ">
            <span className="radio-button-group">
              <input type="radio" name="" id="" />%
            </span>
            <span className="radio-button-group">
              <input type="radio" name="" id="" />$
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Budget;
