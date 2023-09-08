import React from "react";
import "./Merit_guideline.css";

const Merit_guideline = () => {
  return (
    <>
      <div className="merit_guideline">
        <h2 className="font-semibold">
          Merit Guidelines for &#123; Group 1 &#125;
        </h2>
        <span className="flex items-center gap-20  mt-20">
          <h3 className="">
            How do you want to set guidelines for the &#123; Group 1 &#125;
          </h3>
          <span className="radio-button-group flex items-center">
            <input type="radio" name="" id="" />
            <h3>Auto</h3>
            <span className="radio-button-group flex items-center">
              <input type="radio" name="" id="" />
              <h3>Manual</h3>
            </span>
          </span>
        </span>

        <div className="matrix-percent-2 mt-6">
          <div className="flex justify-between">
            <h2 className="font-semibold">
              Matrix 2 for &#123; Group 1 &#125;
            </h2>
            <div>
              <h3>$ 300,000, 42%</h3>
              <p>95%pay gap</p>
            </div>
          </div>
          <div className="flex  justify-end my-4">
            <div className="flex w-[22rem]  bg-gray-200 justify-around">
              <span className=" text-center">
                <h4>Orange</h4> <h4>Min-85%</h4>{" "}
              </span>
              <span className=" text-center">
                <h4>Green</h4> <h4>Min-85%</h4>{" "}
              </span>
              <span className=" text-center">
                <h4>Red</h4> <h4>Min-85%</h4>{" "}
              </span>
            </div>
          </div>
          <div className="flex  ">
            <h2 className="w-[10rem]">Excellent-170%</h2>
            <div className="flex justify-around w-[22rem]  ms-1">
              <input type="number" name="" id="" />
              <input type="number" name="" id="" />
              <input type="number" name="" id="" />
            </div>
          </div>
          <div className="flex  mt-2">
            <h2 className="w-[10rem]">Good-90%</h2>
            <div className="flex justify-around w-[22rem]  ms-1">
              <input type="number" name="" id="" />
              <input type="number" name="" id="" />
              <input type="number" name="" id="" />
            </div>
          </div>
          <div className="flex mt-2">
            <h2 className="w-[10rem]">Poor-30%</h2>
            <div className="flex justify-around w-[22rem]  ms-1">
              <input type="number" name="" id="" />
              <input type="number" name="" id="" />
              <input type="number" name="" id="" />
            </div>
          </div>
        </div>
        <div className="merit-buttons flex gap-20">
          <button className="bck-btn">Back</button>
          <button className="cnt-btn">Continue</button>
        </div>
        <div className="budjet">
          <h1>Budjet</h1>
        </div>
      </div>
    </>
  );
};

export default Merit_guideline;
