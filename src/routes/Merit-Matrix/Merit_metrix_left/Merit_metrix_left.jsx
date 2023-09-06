import React from 'react'
import "./Merit_metrix_left.css"
import {ImTarget} from "react-icons/im"


const Merit_metrix_left = () => {
  return (
    <>
      <div className="flex flex-col merit-metrix-left ">
        <div className="flex items-center  p-8">
          <ImTarget className="target-icon" />
          <span>
            <h2>Step 1</h2>
            <h3 className="font-semibold">Matrix Type</h3>
          </span>
        </div>
        <div className="flex items-center  p-8">
          <ImTarget className="target-icon" />
          <span>
            <h2>Step 2</h2>
            <h3 className="font-semibold">Performance weights</h3>
          </span>
        </div>
        <div className="flex items-center  p-8">
          <ImTarget className="target-icon" />
          <span>
            <h2>Step 3</h2>
            <h3 className="font-semibold">Parity weights</h3>
          </span>
        </div>
        <div className="flex items-center  p-8">
          <ImTarget className="target-icon" />
          <span>
            <h2>Step 4</h2>
            <h3 className="font-semibold">Budjet</h3>
          </span>
        </div>
        <div className="flex items-center  p-8">
          <ImTarget className="target-icon" />
          <span>
            <h2>Step 5</h2>
            <h3 className="font-semibold">Pay gap manager</h3>
          </span>
        </div>
      </div>
    </>
  );
};

export default Merit_metrix_left