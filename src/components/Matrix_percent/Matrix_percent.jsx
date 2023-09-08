import React from "react";
import "./Matrix_percent.css";
import SuccessModal from "../Loginsuccess/SuccessModal";

const Matrix_percent = () => {
  return (
    <>
      <div className="matrix_percent">
        <div className="matrix-percent-1">
          <div className="flex justify-between">
            <h2 className="font-semibold">
              Matrix 1 for &#123; Group 1 &#125;
            </h2>
            <h3>$ 250,000, 30%</h3>
          </div>
          <div className="flex justify-end my-4">
            <div className="flex w-[22rem]  bg-gray-200 justify-around">
              <span>
                <h4>Orange</h4> <h4>Min-85%</h4>{" "}
              </span>
              <span>
                <h4>Green</h4> <h4>Min-85%</h4>{" "}
              </span>
              <span>
                <h4>Red</h4> <h4>Min-85%</h4>{" "}
              </span>
            </div>
          </div>
          <div className="flex  ">
            <h2 className="w-[10rem]">Excellent-150%</h2>
            <div className="flex justify-around w-[22rem]  ms-1">
              <input type="percentage" name="" id="" />
              <input type="number" name="" id="" />
              <input type="number" name="" id="" />
            </div>
          </div>
          <div className="flex  mt-2">
            <h2 className="w-[10rem]">Good-100%</h2>
            <div className="flex justify-around w-[22rem]  ms-1">
              <input type="number" name="" id="" />
              <input type="number" name="" id="" />
              <input type="number" name="" id="" />
            </div>
          </div>
          <div className="flex mt-2">
            <h2 className="w-[10rem]">Poor-50%</h2>
            <div className="flex justify-around w-[22rem]  ms-1">
              <input type="number" name="" id="" />
              <input type="number" name="" id="" />
              <input type="number" name="" id="" />
            </div>
          </div>
          <div className="flex justify-end">
            <button>Apply</button>
          </div>
        </div>

        <div className="matrix-percent-2">
          <div className="flex justify-between">
            <h2 className="font-semibold">
              Matrix 2 for &#123; Group 1 &#125;
            </h2>
            <div>
              <h3>$ 300,000, 42%</h3>
              <p>95%pay gap</p>
            </div>
            
          </div>
          <div className="flex justify-end my-4">
            <div className="flex w-[22rem]  bg-gray-200 justify-around">
              <span>
                <h4>Orange</h4> <h4>Min-85%</h4>{" "}
              </span>
              <span>
                <h4>Green</h4> <h4>Min-85%</h4>{" "}
              </span>
              <span>
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
          <div className="flex justify-end">
            <button>Apply</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Matrix_percent;
