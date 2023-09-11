import React from 'react'
import "./Budget_Allocation.css"
const Budget_Allocation = () => {
  return (
    <>
      <div className="merit ">
        <h2>Budget Allocation</h2>
        <h3 className="mt-4">How do you want to allocate the budget?</h3>
        <div className="budget-allocation-rect">
          <div className="w-1/2 flex justify-center">
            <h3>Merit Summary</h3>
          </div>
          <div className="w-1/2 flex justify-center">
            {" "}
            <h3>Merit Summary -Visualization</h3>
          </div>
        </div>
        <div className="budget-allocation-rect">
          <div className="w-1/2 flex justify-center">
            <h3>Bonus Summary</h3>
          </div>
          <div className="w-1/2 flex justify-center">
            {" "}
            <h3>Bonus Summary -Visualization</h3>
          </div>
        </div>
        <div className="merit-buttons absolute bottom-0  right-10 pb-10 flex gap-20">
          <button className="bck-btn">Back</button>
          <button className="cnt-btn">Continue</button>
        </div>
      </div>
    </>
  );
}

export default Budget_Allocation