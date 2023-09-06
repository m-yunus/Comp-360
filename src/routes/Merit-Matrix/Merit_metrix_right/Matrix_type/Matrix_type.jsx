import React from 'react'
import "./Matrix_type.css";

const Matrix_type= () => {
  return (
    <>
      <div className="right-side">
        <div>
          <h2 className="font-semibold">
            What is the merit matrix type suitable for {"Group Name"}{" "}
          </h2>
          <div className="flex gap-10 mt-20">
            <span className="radio-button-group">
              <input type="radio" name="" id="" />
              5x3
            </span>
            <span className="radio-button-group">
              <input type="radio" name="" id="" />
              5x5
            </span>
            <span className="radio-button-group">
              <input type="radio" name="" id="" />
              Custom
            </span>
            <span className="radio-button-group">
              <input type="radio" name="" id="" />
              No Matrix is required
            </span>
          </div>
        </div>
        <div className="button-container">
          <button className="back_button">Back</button>

          <button className="continue_button">Continue</button>
        </div>
      </div>
    </>
  );
}

export default Matrix_type;