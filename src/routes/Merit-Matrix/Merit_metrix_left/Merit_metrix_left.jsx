import React from 'react'
import "./Merit_metrix_left.css"
import {ImTarget} from "react-icons/im"


const Merit_metrix_left = ({activeStep}) => {
  const getColor = (step) => (step === activeStep ? "#1877d2" : "gray");
  return (
    <>
      <div className="flex flex-col merit-metrix-left ">
        <div className="flex items-center  p-8">
          <ImTarget style={{ color: getColor(1) }} className="target-icon" />
          <span>
            <h2 style={{ color: getColor(1) }}>Step 1</h2>
            <h3 style={{ color: getColor(1) }} className="font-semibold">
              Matrix Type
            </h3>
          </span>
        </div>
        <div className="flex items-center  p-8">
          <ImTarget style={{ color: getColor(2) }} className="target-icon" />
          <span>
            <h2 style={{ color: getColor(2) }}>Step 2</h2>
            <h3 style={{ color: getColor(2) }} className="font-semibold">
              Performance weights
            </h3>
          </span>
        </div>
        <div className="flex items-center  p-8">
          <ImTarget style={{ color: getColor(3) }} className="target-icon" />
          <span>
            <h2 style={{ color: getColor(3) }}>Step 3</h2>
            <h3 style={{ color: getColor(3) }} className="font-semibold">
              Parity weights
            </h3>
          </span>
        </div>
        <div className="flex items-center  p-8">
          <ImTarget style={{ color: getColor(4) }} className="target-icon" />
          <span>
            <h2 style={{ color: getColor(4) }}>Step 4</h2>
            <h3 style={{ color: getColor(4) }} className="font-semibold">
              Budjet
            </h3>
          </span>
        </div>
        <div className="flex items-center  p-8">
          <ImTarget style={{ color: getColor(5) }} className="target-icon" />
          <span>
            <h2 style={{ color: getColor(5) }}>Step 5</h2>
            <h3 style={{ color: getColor(5) }} className="font-semibold">
              Pay gap manager
            </h3>
          </span>
        </div>
      </div>
    </>
  );
};

export default Merit_metrix_left