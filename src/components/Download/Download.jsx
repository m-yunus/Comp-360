import React from "react";
import "./Download.css";
import Download_Budget from "./Download_Budget/Download_Budget";
import Score_Card from "./Score_Card/Score_Card";

const Download = () => {
  return (
    <>
      <div className="merit flex">
        <div className="w-1/2">
          <div className="flex items-center gap-20">
            <h2>Download </h2>
            <div className="flex gap-6">
              <span className="radio-button-group flex items-center  ">
                <input type="radio" name="" id="" />
                <h3>Payroll Extract</h3>
              </span>
              <span className="flex items-center ">
                <input type="radio" name="" id="" />
                <h3>Comp Score card</h3>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-[87px] my-4">
            <h2>Generate</h2>
            <div className="flex gap-[72px]">
              <span className="radio-button-group flex items-center  ">
                <input type="radio" name="" id="" />
                <h3>Letters</h3>
              </span>
              <span className="flex items-center ">
                <input type="radio" name="" id="" />
                <h3>TRS</h3>
              </span>
            </div>
          </div>

          <div className="flex gap-[72px] ms-[298px]">
            <span className="radio-button-group flex items-center  ">
              <input type="radio" name="" id="" />
            </span>
            <span className="flex items-center ">
              <input type="radio" name="" id="" />
              <h3>TRS 2</h3>
            </span>
            <button className="filter-btn">Filter</button>
          </div>
          <div className="flex gap-[24px] ms-[298px] my-4">
            <span className="flex items-center ">
              <input type="radio" name="" id="" />
              <h3>Letter 1</h3>
            </span>{" "}
            <span className="flex items-center ">
              <input type="radio" name="" id="" />
              <h3>Letter 2</h3>
            </span>{" "}
            <span className="flex items-center ">
              <input type="radio" name="" id="" />
              <h3>Letter n</h3>
            </span>
          </div>
          <div>
            <Download_Budget />
            <Score_Card/>
          </div>
          <div>

          </div>
        </div>
        <div className="payrol-extract  ">
          <h3 className="flex justify-center">Payrol Extract</h3>
          <div className="flex justify-center gap-10">
            <div className="flex">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">+ Column 1</label>
            </div>
            <div className="flex">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">+ Column 2</label>
            </div>
          </div>
          <div className="flex justify-center gap-10">
            <label htmlFor="">+ Column 1</label>

            <label htmlFor="">+ Column 2</label>
          </div>
          <div className="flex justify-center gap-10">
            <div className="flex">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">+ Subset 1</label>
            </div>
            <div className="flex">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">+ Subset 2</label>
            </div>
          </div>
          <div className="flex justify-center gap-10 mt-[-15px]">
            <div className="flex">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">+ Subset 1</label>
            </div>
            <div className="flex">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">+ Subset 2</label>
            </div>
          </div>
          <div className="flex justify-center gap-10 ">
            <div className="flex">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">+ Column 5</label>
            </div>
            <div className="flex">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">+ Column 6</label>
            </div>
          </div>
          <div className=" flex gap-2 justify-center mt-4 px-2">
            <button className="bck-btn w-22 h-7 flex items-center justify-center">
              Cancel
            </button>
            <button className="cnt-btn  w-22 h-7 flex items-center justify-center">
              Recommend
            </button>
          </div>
        </div>
        <div className="top-popup">
          <h1>That’s thoughtful!</h1>
        </div>
      </div>
    </>
  );
};

export default Download;
