import React from "react";
import "./Merit_Budjet.css";

const Merit_budjet = () => {
  return (
    <>
      <div className="merit ">
        <div className="merit-budjet">
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
          <div className="flex gap-8 my-4 items-center ms-20">
            <h2>What is your budjet?</h2>
            <input className="ms-24" placeholder="Enter" type="text" />
            <span>
              <input type="radio" name="" id="" />%
            </span>
            <span className="ms-5">
              {" "}
              <input type="radio" name="" id="" />$
            </span>
          </div>
          <div className="flex gap-10">
            <h2>Do you want to hold back a portion?</h2>
            <span className="flex items-center ms-44">
              <input type="radio" name="" id="" />
              Yes
            </span>
            <span className="flex items-center">
              {" "}
              <input type="radio" name="" id="" />
              No
            </span>
          </div>
          <div className="flex gap-8 my-4 items-center ms-20">
            <h2>How much you want to holdback?</h2>
            <input placeholder="Enter" className="ms-2" type="text" />
            <span>
              <input type="radio" name="" id="" />%
            </span>
            <span className="ms-5">
              {" "}
              <input type="radio" name="" id="" />$
            </span>
          </div>
          <div className="flex gap-10">
            <h2>Do you want to give step increment?</h2>
            <span className="flex items-center ms-44">
              <input type="radio" name="" id="" />
              Yes
            </span>
            <span className="flex items-center">
              {" "}
              <input type="radio" name="" id="" />
              No
            </span>
          </div>
        </div>
        <div className="button-container">
          
            <button  className="back_button">
              Back
            </button>
          
          <button className="continue_button">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Merit_budjet;
