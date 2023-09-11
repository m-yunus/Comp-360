import React from "react";
import "./Merit_budget_b.css";

const Merit_budget_b = () => {
  return (
    <>
      <div className="merit">
        <h2>
          Do you want to build a budget or work with the budget already
          allotted?
        </h2>
        <div className="flex gap-20">
          <span className="radio-button-group flex items-center">
            <input type="radio" name="" id="" />
            <h3>I want to work with the available budget (Top -down)</h3>
          </span>
          <span className="flex items-center">
            <input type="radio" name="" id="" />
            <h3>I want to build the budget (Bottom –up)</h3>
          </span>
        </div>
        <div className="flex mt-20 ">
          <h2>Do you want to give step increment?</h2>{" "}
          <span className="radio-button-group flex items-center ms-52">
            <input type="radio" name="" id="" />
            <h3>Yes</h3>
          </span>
          <span className="flex items-center ms-10">
            <input type="radio" name="" id="" />
            <h3>No</h3>
          </span>
        </div>
        <div className="merit-buttons absolute bottom-0  right-10 pb-10 flex gap-20">
          <button className="bck-btn">Back</button>
          <button className="cnt-btn">Continue</button>
        </div>
        <div className="budjet">
          <h1>Budget</h1>
        </div>
      </div>
    </>
  );
};

export default Merit_budget_b;
