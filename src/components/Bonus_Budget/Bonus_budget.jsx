import React from 'react'
import "./Bonus_budget.css"

const Bonus_budget = () => {
  return (
    <>
      <div className="merit">
        <h2>Review bonus budgeting</h2>
        <div className="flex mt-2 ">
          <h3>Bonus 1 $ XXXXX (8%) for 238 Employees</h3>
          <button className="review-button">Review</button>
        </div>
        <div className="flex mt-2">
          <h3>Bonus 2 $ XXXXX (3%) for 100 Employees</h3>{" "}
          <button className="review-button">Review</button>
        </div>
        <hr className="w-96 bg-gray-400 h-[2px] mt-2" />
        <hr className="w-96 bg-gray-400 h-[2px] mt-1 mb-4" />
        <h2>$129,122,11 (12.35%) for 267 Employee</h2>
        <div className="bonus-budjet-table">
          <div className="w-1/2 flex justify-center ">
            <h3>Performance Weights</h3>
          </div>
          <div className="w-1/2  flex  justify-center  ">
            <h3>Modifiers</h3>
          </div>
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
}

export default Bonus_budget